var counter = 0;
var timeLeft = 240;

function convertSeconds(s){

    var min = Math.floor(s / 60);
    var sec = s % 60;
    if(sec < 10) {
		sec = "0" + sec;
	}
    return min + ":" + sec;
    


}




function setup(){

   ;
    window.document.body.style.backgroundImage = "url('barbell.jpg')";
    
    
    

    
    
    title = document.createElement("h1");
    title.innerText = "Fitness app for busy people";
    title.style.color = "goldenrod";
    title.style.textAlign = "center";
    title.style.fontFamily = "'Sofia', cursive";
    document.body.appendChild(title);


    

    upper = document.createElement("div");
    upper.style.height = "150px";
    upper.style.width = "80%";
    upper.style.margin = "0 auto";
    upper.style.padding = "0 auto";
    upper.style.marginTop = "65px";
    upper.style.display = "flex";
    upper.style.justifyContent = "space-between";
    document.body.appendChild(upper);


    left = document.createElement("div");
    left.style.height = "150px";
    left.style.width = "300px";
    upper.appendChild(left);

    
    protip = document.createElement("div");
    protip.style.height = "30px";
    protip.style.width = "100px";
    protip.style.cursor = "pointer";
    protip.innerText = "Pro tip";
    protip.style.fontSize = "20px";
    protip.style.fontWeight = "bold";
    protip.style.color = "goldenrod";
    protip.style.fontDisplay = "cursive";
    protip.style.marginLeft = "50px";
    protip.setAttribute("id", "protip");
    left.appendChild(protip);

    protip.addEventListener("click", function(){

        function asdasd(){
        extension.style.display = "block";
        extension.innerText = tips[getRandomNumber(0, 6)]
        closeButton5.style.display = "block";
        protip.style.display = "none";
        }
        asdasd()
    })
    extension= document.createElement("div");
    extension.style.height = "150px";
    extension.style.width = "250px";
    extension.style.backgroundColor = "goldenrod";
    extension.style.marginTop = "30px";
    extension.style.display = "none";
    left.appendChild(extension);

    closeButton5 = document.createElement("button");
    closeButton5.style.height = "20px";
    closeButton5.style.width = "80px";
    closeButton5.style.backgroundColor = "blue";
    closeButton5.innerText = "Close";
    closeButton5.style.lineHeight = "1.1";
    closeButton5.style.color = "white";
    closeButton5.style.textAlign = "center";
    closeButton5.style.cursor = "pointer";
    closeButton5.style.marginLeft = "170px";
    closeButton5.setAttribute("id", "closeButton5");
    closeButton5.style.display = "none";
    left.appendChild(closeButton5)

    closeButton5.addEventListener("click", function(){

        function vanish5(){

            extension.style.display = "none";
            closeButton5.style.display = "none";
            protip.style.display = "block";

        }

        vanish5();
    })
  

    display = document.createElement("div");
    display.style.height = "170px";
    display.style.width = "250px";
    display.style.border = "1px  solid black";
    display.style.backgroundColor = "lightblue";
    upper.appendChild(display);

    var span = document.createElement("span");

    span.textContent = '';
    display.appendChild(span);


    timer = document.createElement("div");
    timer.innerHTML = convertSeconds(timeLeft - counter);
    timer.style.fontSize = "50px";
    timer.style.textAlign = "center";
    timer.style.marginTop = "40px";
    display.appendChild(timer);




   
    

    

    
   

    var startButton = document.createElement("button");
    startButton.style.cursor = "pointer";
    startButton.style.borderRadius = "50%";
    startButton.style.marginTop = "10px";
    startButton.style.marginLeft = "60px";
    startButton.style.height = "20px";
    startButton.style.width = "65px";
    startButton.innerText = "Start"
    startButton.style.cssFloat = "left";
    display.appendChild(startButton);

    startButton.addEventListener("click", function(){
        function startSom(){
        
            function timeIt(){
    
               
                
                counter++;
                timer.innerHTML = convertSeconds(timeLeft - counter);
                startButton.innerText = "Start";
                
              


                

               
    
                 
                
                
                if(counter == 1){
                    pushups.style.display = "block";
                    var audio = new Audio('bell_start.mp3');
                    audio.play();
                    var bcgAudio = new Audio('ready war.mp3');
                    bcgAudio.play();
                    
                }
              
              if(counter == 40 || counter == 100 || counter ==160 || counter==220){ 
                  $("#protip").trigger("click");
                if(counter == 40){
                    pushups.style.display = "none";
                } else if(counter ==100){
                    crunches.style.display = "none";
                } else if( counter ==160){
                    bridges.style.display = "none";
                } else if(counter = 220){
                    squats.style.display = "none";
                }
                var audio = new Audio('bell_start.mp3');
                audio.play();

span.innerText = "Take a break!";


              

            } else if(counter == 60 ||counter ==120 || counter ==180 ) {
                span.innerText = '';
                $("#closeButton5").trigger("click");
                if(counter == 60){
                    crunches.style.display = "block";
                } else if(counter ==120){
                    bridges.style.display = "block";
                } else if(counter == 180){
                    squats.style.display = "block";
                }
                var audio = new Audio('bell_start.mp3');
                audio.play();
            }

           
            
            stopButton.addEventListener("click", function(){

        

            clearInterval(interval);
            
            
            startButton.innerText = "Resume";

            
            
    
            
        })
            

                
                    

                    
            
            

                    
                
                
                
                if(counter == timeLeft){
        
                    
                    clearInterval(interval);
                
                    var audio2 = new Audio('bell end.mp3');
                    audio2.play();


                
                    

                    
    
                   
                    setTimeout(func, 2000);
                    function func() {
                    location.reload();
                    }
                    
                
                    
                    
                    
                    
                    
        
                }
                
        
            }
    
            
        
            
        
            var interval = setInterval(timeIt, 1000);
            

        
    
        }
    
        
    
        startSom();
    
    })

    var stopButton = document.createElement("button");
    stopButton.style.cursor = "pointer";
    stopButton.style.borderRadius = "50%";
    stopButton.style.marginTop = "10px";
    stopButton.style.marginLeft = "10px";
    stopButton.style.height = "20px";
    stopButton.style.width = "65px";
    stopButton.innerText= "Stop";
    display.appendChild(stopButton);


    right = document.createElement("div");
    right.style.height = "150px";
    right.style.width = "300px";
    upper.appendChild(right);

    instr = document.createElement("div");
    instr.style.height = "50px";
    instr.style.width = "100px";
    instr.innerText = "Instruction";
    instr.style.fontWeight = "bold";
    instr.style.fontSize = "20px";
    instr.style.color = "goldenrod";
    instr.style.cursor = "pointer";
    instr.style.marginLeft = "120px";
    right.appendChild(instr);

    instr.addEventListener("click", function(){

        function asdasd2(){
        extension2.style.display = "block";
        closeButton6.style.display = "block";
        instr.style.display = "none";
        }
        asdasd2()
    })

    extension2= document.createElement("div");
    extension2.style.height = "150px";
    extension2.style.width = "250px";
    extension2.style.backgroundColor = "goldenrod";
    extension2.style.marginTop = "30px";
    extension2.innerText = "Do a workout for 40 sec.When you hear the bell rest for 20 sec.Recommended workouts are shown below";
    extension2.style.display = "none";
    right.appendChild(extension2);

    closeButton6 = document.createElement("button");
    closeButton6.style.height = "20px";
    closeButton6.style.width = "80px";
    closeButton6.style.backgroundColor = "blue";
    closeButton6.innerText = "Close";
    closeButton6.style.lineHeight = "1.1";
    closeButton6.style.color = "white";
    closeButton6.style.textAlign = "center";
    closeButton6.style.cursor = "pointer";
    closeButton6.style.marginLeft = "170px";
    closeButton6.style.display = "none";
    right.appendChild(closeButton6)


   

    closeButton6.addEventListener("click", function(){

        function vanish6(){

            extension2.style.display = "none";
            closeButton6.style.display = "none";
            instr.style.display = "block";

        }

        vanish6();
    })


    text = document.createElement("p");
    text.innerHTML = "Press the Start button to go through 4 minutes of hell";
    text.style.fontSize = "20px";
    text.style.textAlign = "center";
    text.style.color = "goldenrod";
    text.style.fontWeight = "bold";
    document.body.appendChild(text);
    
    


    //bottom

    bottom = document.createElement("div");
    bottom.style.height = "50px";
    bottom.style.width = "100%";
    bottom.style.backgroundColor = "lightblue";
    bottom.style.marginTop = "65px";
    bottom.style.display = "flex";
    bottom.style.justifyContent = "space-between";
    document.body.appendChild(bottom);

    sec1 = document.createElement("div");
    sec1.style.height = "auto";
    sec1.style.width = "20%"
    bottom.appendChild(sec1);

    workout1 = document.createElement("button");
    workout1.innerHTML = "Pushups";
    workout1.style.height = "40px";
    workout1.style.width = "100%";
    workout1.style.textAlign = "center";
    workout1.style.marginTop = "5px";
    workout1.style.cursor = "pointer";
    sec1.appendChild(workout1);

    workout1.addEventListener("click",function(){

        function appear(){

            pushups.style.display = "block";
            

        }

            


        appear();

            

    })

    pushups = document.createElement("div");
    pushups.style.height = "180px";
    pushups.style.width = "275px";
    pushups.style.backgroundColor = "lightblue";
    pushups.innerHTML = "Pushups are a great upper body exercise, putting the emphasis  on the chest and triceps ";
    pushups.style.display = "none";
    sec1.appendChild(pushups);

    gif = document.createElement("div");
    gif.style.height = "100px";
    gif.style.width = "100px";
    gif.style.backgroundImage = "url('tenor.gif')";
    gif.style.backgroundPosition = "center";
    gif.style.backgroundSize = "cover";
    gif.style.marginTop = "5px";
    gif.style.marginLeft = "80px";
    pushups.appendChild(gif);


            closeButton = document.createElement("button");
            closeButton.style.height = "20px";
            closeButton.style.width = "20px";
            closeButton.style.backgroundColor = "blue";
            closeButton.innerText = "x";
            closeButton.style.lineHeight = "1.1";
            closeButton.style.color = "white";
            closeButton.style.marginLeft = "208px";
            closeButton.style.textAlign = "center";
            closeButton.style.cursor = "pointer";
            closeButton.style.marginTop = "2px";
            closeButton.style.marginLeft = "255px";
            pushups.appendChild(closeButton);

            closeButton.addEventListener("click",function(){

                function vanish(){

                    pushups.style.display = "none";
                }
                vanish();
            })

     sec2 = document.createElement("div");
     sec2.style.height = "auto";
     sec2.style.width = "20%"
     bottom.appendChild(sec2) ;    


    workout2 = document.createElement("button");
    workout2.innerHTML = "Crunches";
    workout2.style.height = "40px";
    workout2.style.width = "100%";
    workout2.style.textAlign = "center";
    workout2.style.marginTop = "5px";
    workout2.style.cursor = "pointer";
    sec2.appendChild(workout2);

    workout2.addEventListener("click",function(){

        function appear2(){

            crunches.style.display = "block";
            
            

        }

            


        appear2();

            

    })

    crunches = document.createElement("div");
    crunches.style.height = "181px";
    crunches.style.width = "275px";
    crunches.style.backgroundColor = "lightblue";
    crunches.innerHTML = "Crunches work your core muscles, great for getting rid of that programmer - belly";
    crunches.style.display = "none";
    sec2.appendChild(crunches);

    gif2 = document.createElement("div");
    gif2.style.height = "100px";
    gif2.style.width = "100px";
    gif2.style.backgroundImage = "url('tenor2.gif')";
    gif2.style.backgroundPosition = "center";
    gif2.style.backgroundSize = "cover";
    gif2.style.marginTop = "5px";
    gif2.style.marginLeft = "80px";
    crunches.appendChild(gif2);


            closeButton2 = document.createElement("button");
            closeButton2.style.height = "20px";
            closeButton2.style.width = "20px";
            closeButton2.style.backgroundColor = "blue";
            closeButton2.innerText = "x";
            closeButton2.style.lineHeight = "1.1";
            closeButton2.style.color = "white";
            closeButton2.style.marginLeft = "255px";
            closeButton2.style.textAlign = "center";
            closeButton2.style.cursor = "pointer";
            closeButton2.style.marginTop = "20px";
            closeButton2.style.marginLeft = "255px";
            crunches.appendChild(closeButton2);

            closeButton2.addEventListener("click",function(){

                function vanish2(){

                    crunches.style.display = "none";
                }
                vanish2();
            })

    sec3 = document.createElement("div");
    sec3.style.height = "auto";
    sec3.style.width = "20%"
    bottom.appendChild(sec3) ; 

    
    workout3 = document.createElement("button");
    workout3.innerHTML = "Bridges";
    workout3.style.height = "40px";
    workout3.style.width = "100%";
    workout3.style.textAlign = "center";
    workout3.style.marginTop = "5px";
    workout3.style.cursor = "pointer";
    sec3.appendChild(workout3);

    workout3.addEventListener("click",function(){

        function appear3(){

            bridges.style.display = "block";
    
            

        }

            


        appear3();

            

    })

    bridges = document.createElement("div");
    bridges.style.height = "181px";
    bridges.style.width = "275px";
    bridges.style.backgroundColor = "lightblue";
    bridges.innerHTML = "Bridges are great for your back muscles, as well as your legs";
    bridges.style.display = "none";
    sec3.appendChild(bridges);

    gif3 = document.createElement("div");
    gif3.style.height = "100px";
    gif3.style.width = "100px";
    gif3.style.backgroundImage = "url('tenor3.gif')";
    gif3.style.backgroundPosition = "center";
    gif3.style.backgroundSize = "cover";
    gif3.style.marginTop = "5px";
    gif3.style.marginLeft = "80px";
    bridges.appendChild(gif3);


    closeButton3 = document.createElement("button");
    closeButton3.style.height = "20px";
    closeButton3.style.width = "20px";
    closeButton3.style.backgroundColor = "blue";
    closeButton3.innerText = "x";
    closeButton3.style.lineHeight = "1.1";
    closeButton3.style.color = "white";
    closeButton3.style.marginLeft = "255px";
    closeButton3.style.textAlign = "center";
    closeButton3.style.cursor = "pointer";
    closeButton3.style.marginTop = "20px";
    closeButton3.style.marginLeft = "255px";
    bridges.appendChild(closeButton3);

    closeButton3.addEventListener("click",function(){

        function vanish3(){

            bridges.style.display = "none";
        }
        vanish3();
    })


    sec4 = document.createElement("div");
    sec4.style.height = "auto";
    sec4.style.width = "20%"
    bottom.appendChild(sec4) ; 

    workout4 = document.createElement("button");
    workout4.innerHTML = "Squats";
    workout4.style.height = "40px";
    workout4.style.width = "100%";
    workout4.style.textAlign = "center";
    workout4.style.marginTop = "5px";
    workout4.style.cursor = "pointer";
    sec4.appendChild(workout4);

    workout4.addEventListener("click",function(){

        function appear4(){

            squats.style.display = "block";
            
            

        }

            


        appear4();

            

    })

    squats = document.createElement("div");
    squats.style.height = "180px";
    squats.style.width = "270px";
    squats.style.backgroundColor = "lightblue";
    squats.innerHTML = "Squats are the best exercise for developping the leg muscles";
    squats.style.display = "none";
    sec4.appendChild(squats);

    
    gif4 = document.createElement("div");
    gif4.style.height = "100px";
    gif4.style.width = "100px";
    gif4.style.backgroundImage = "url('giphy.gif')";
    gif4.style.backgroundPosition = "center";
    gif4.style.backgroundSize = "cover";
    gif4.style.marginTop = "5px";
    gif4.style.marginLeft = "80px";
    squats.appendChild(gif4);

    closeButton4 = document.createElement("button");
    closeButton4.style.height = "20px";
    closeButton4.style.width = "20px";
    closeButton4.style.backgroundColor = "blue";
    closeButton4.innerText = "x";
    closeButton4.style.lineHeight = "1.1";
    closeButton4.style.color = "white";
    closeButton4.style.marginLeft = "253px";
    closeButton4.style.textAlign = "center";
    closeButton4.style.cursor = "pointer";
    closeButton4.style.marginTop = "20px";
    closeButton4.style.marginLeft = "250px";
    squats.appendChild(closeButton4);
    
    closeButton4.addEventListener("click",function(){

        function vanish4(){

            squats.style.display = "none";
        }
        vanish4();
    })

   
   
}

setup();

