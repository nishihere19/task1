
function fnc(){
      
         for(i=0;i<16;i++){
          document.getElementById(i).disabled=false;
        }

    
    reset_time();
var a=new Array(9)
a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var j=0;
    t=16;
var random;
var spacing="<br>";
while (j<a.length){
    random=Math.floor(Math.random()*a.length)
    if(a[random]!="slctd"){
        document.getElementById(a[random]).value=j;
        a[random]="slctd";
        j++;
    }
}
    start();
}
var t=16;
var y=0;
var i;
var d;
function val(d=this.id){
    if(document.getElementById(d).value==0){
        y=0;
    }
    if(document.getElementById("st").disabled==false){
        document.getElementById("st").disabled=true;
    }
if(document.getElementById(d).value==y){
    if(t>40){
        c=document.getElementById(d).value="";
        document.getElementById(d).disabled=true;
        t++;
    }
    else{
        document.getElementById(d).value=t;
        t++;
        
    }
    if(t>56){
      reset();
      }
        y++;
}
else{
         for(i=0;i<16;i++){
          document.getElementById(i).disabled=true;
        }
        reset();
    }
}  


function reset(){
    document.getElementById("st").disabled=false;
     stop();
}
var x,timer,divide;
x=0;
divide=1000;
var best_time=localStorage.getItem("best_time");
var curr_time;
function start(){
    timer=self.setInterval("increment()",(1000/divide));
   
    
}
function increment(){
    x++;
    document.getElementById("timer_out").innerHTML=(x/divide);
   if(best_time==null){
    document.getElementById("best_time").innerHTML=(curr_time);
   }
   curr_time=x/divide;
    
}
function stop(){
 if(t>56&&curr_time<(best_time)){
     best_time=curr_time;
     localStorage.setItem("best_time",best_time-0.001);
 }
    if(t>56&&best_time==null){
        best_time=curr_time;
     localStorage.setItem("best_time",best_time-0.001);
    
    }
    document.getElementById("best_time").innerHTML=(best_time); 
    clearInterval(timer);
    timer=null;
}
function reset_time(){
    stop();
    
    x=0;
   document.getElementById("timer_out").innerHTML=(x/divide); 
    
}