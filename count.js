console.log('hello NIROB')

//hello .Now i am gonna make a time counting app >>

var stopped = true;
var sec = 0;
var min = 0;
var hrs = 0;

function start(){
if(stopped == true){
stopped = false;
timer();
}
else{}
}


function timer(){  
    
  //sec  
    if(stopped == false){
        sec = parseInt(sec);
        sec++;
        document.getElementById('sec').innerHTML = sec;
        setTimeout(timer, 1000);
    }
    else{}

    if(sec < 10){
        document.getElementById('sec').innerHTML = "0" + sec;
    }
    else{}

//minute 

    if(sec == 60){
        sec = 0;
        min = parseInt(min);
        min++;
        document.getElementById('min').innerHTML = min;

    }
    else{}
    
    if(min < 10){
        document.getElementById('min').innerHTML = "0" + min ;
    }
    else{}

    //hours

    if(min == 60){
        min = 0;
        hrs = parseInt(hrs);
        hrs++;
        document.getElementById('hrs').innerHTML = hrs;
    }  
    else{}
if(hrs < 10){
    document.getElementById('hrs').innerHTML = "0" + hrs;
}
else{}

}


//STOP FUNCTION 
function stop(){
    stopped = true;
}

//RESTART FUNCTION

function restart(){
stopped = true;
sec = 0;
min = 0;
hrs = 0;


}