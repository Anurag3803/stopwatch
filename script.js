
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;


function Start(){
    timer = true;
    stopwatch();
}
let btn1 = document.getElementById("Start");
btn1.addEventListener("click", Start);



function stop(){
    timer = false;
}
let btn2 = document.getElementById("Stop");
btn2.addEventListener("click", stop);



function reset(){
    timer = false;

     hr = 0;
     min = 0;
     sec = 0;
     count = 0;
     document.getElementById("hr").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
     document.getElementById("count").innerHTML = "00";
}
let btn3 = document.getElementById("Reset");
btn3.addEventListener("click", reset);


function stopwatch(){
          if(timer == true){
          count++;
           
          if(count == 100){
            sec++;
            count = 0;
          }

          if(sec == 60){
            min++;
            sec = 0;
          }

          if(min == 60){
            hr++;
            min= 0;
            sec = 0;
          }

          var hrString = hr; 
          if(hr < 10){
            hrString = "0" + hrString;
          }
          document.getElementById("hr").innerHTML = hrString;
          

          var minString = min; 
          if(min < 10){
            minString = "0" + minString;
          }
          

          document.getElementById("min").innerHTML = minString;

          var secString = sec;
          if(sec < 10){
            secString = "0" + secString;
          }
          document.getElementById("sec").innerHTML = secString;


          var countString = count;
          if(count < 10){
            countString = "0" + countString;
          }
          document.getElementById("count").innerHTML = countString;
          
          
          

        setTimeout("stopwatch()", 10 );
    }
}