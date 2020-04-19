
var z=0;
function fnc(){
      
         for(i=0;i<16;i++){
          document.getElementById(i).disabled=false;
        }
    if(z==0){
init();
 z++;   }
    
    
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
        localStorage.setItem("Init","initialized");
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
var x,timer,divide,count=0;
x=0;
divide=1000;
var best_time=localStorage.getItem("best_time");
var best=new Array(6);
var curr_time;
function start(){
    timer=self.setInterval("increment()",(1000/divide));

   
    
}
function increment(){
    x++;
    document.getElementById("timer_out").innerHTML=(x/divide);
   if(best_time=="null"){
    document.getElementById("best_time").innerHTML=(curr_time);
   }
   curr_time=x/divide;
    
}
function stop(){
    if(t>56){
    if(best[4]==='null'){
        if(best[3]==='null'){
            if(best[2]==='null'){
                if(best[1]==='null'){
                    if(best[0]==='null'){
                        best[0]=curr_time;
                        curr_time=null;
                        count=1;
                        document.getElementById("best_time_5").innerHTML=("done");
                        
                    }
                    else{
                        best[1]=curr_time;
                        curr_time=null;
                        count=2;
                        
                    }
                }
                 else{
                        best[2]=curr_time;
                     curr_time=null;
                     count=3;
                     
                    }
                
            }
             else{
                        best[3]=curr_time;
                 curr_time=null;
                 count=4;
                 
                    }
        }
         else{
                        best[4]=curr_time;
             curr_time=null;
             count=5;
             
                    }
         best=best.slice(0,count).sort(function(a,b){
             return a-b;}).concat(best.slice(count,5));
          localStorage.setItem("best_time_1",best[0]);
          localStorage.setItem("best_time",best[0]);
          localStorage.setItem("best_time_2",best[1]);
          localStorage.setItem("best_time_3",best[2]);
          localStorage.setItem("best_time_4",best[3]);
          localStorage.setItem("best_time_5",best[4]);


    }
   else{
       if(curr_time!=null){
        best[5]=curr_time;
           
        count=6;
           best=best.slice(0,count).sort(function(a,b){
             return a-b;});
         localStorage.setItem("best_time_1",best[0]);
     localStorage.setItem("best_time_2",best[1]);
     localStorage.setItem("best_time_3",best[2]);
     localStorage.setItem("best_time_4",best[3]);
     localStorage.setItem("best_time_5",best[4]);
     localStorage.setItem("best_time",best[0]);
           curr_time=null;
    
       }
       
    }
    
   

   
          
    }
      best_time=localStorage.getItem("best_time");
          if(best[0]!=null){
             document.getElementById("best_time").innerHTML=(best[0]);
            document.getElementById("best_time_1").innerHTML=(best[0]);
        }
    if(best[1]!=null){
    document.getElementById("best_time_2").innerHTML=(best[1]); }
         if(best[2]!=null){
    document.getElementById("best_time_3").innerHTML=(best[2]); }
         if(best[3]!=null){
    document.getElementById("best_time_4").innerHTML=(best[3]); }
         if(best[4]!=null){
    document.getElementById("best_time_5").innerHTML=(best[4]); }
    clearInterval(timer);
    timer=null;
}
function reset_time(){
    stop();

    
    x=0;
   document.getElementById("timer_out").innerHTML=(x/divide); 
    
}
function init(){
    var f;
    f=localStorage.getItem("Init");
    if(f=="initialized"){
best[0]=localStorage.getItem("best_time_1");
best[1]=localStorage.getItem("best_time_2");
best[2]=localStorage.getItem("best_time_3");
best[3]=localStorage.getItem("best_time_4");
best[4]=localStorage.getItem("best_time_5");     
document.getElementById("best_time").innerHTML=(best[0]);
document.getElementById("best_time_1").innerHTML=(best[0]);
document.getElementById("best_time_2").innerHTML=(best[1]); 
document.getElementById("best_time_3").innerHTML=(best[2]); 
document.getElementById("best_time_4").innerHTML=(best[3]); 
document.getElementById("best_time_5").innerHTML=(best[4]); 
    }
    else{
         localStorage.setItem("best_time",null);
      localStorage.setItem("best_time_1",null);
     localStorage.setItem("best_time_2",null);
     localStorage.setItem("best_time_3",null);
     localStorage.setItem("best_time_4",null);
     localStorage.setItem("best_time_5",null); 
    }
}
