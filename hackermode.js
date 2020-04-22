
var z_easy=0;
var z_medium=0;
var z_tuf=0;
var mode;
var tm;
var lev_timer;
var i;

function fnc(){
    t=16;
  
      
         for(i=0;i<16;i++){
          document.getElementById(i).disabled=false;
        }
 
    
     
    reset_time();
var a=new Array(16);
a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var j=0;
    
var random;
var spacing="<br>";
while (j<a.length){
    random=Math.floor(Math.random()*a.length)
    if(a[random]!=="slctd"){
        document.getElementById(a[random]).value=j;
        document.getElementById(a[random]).style.backgroundColor= rgb(255-(j*4),255-(j*4),255-(j*4));
        a[random]="slctd";
        j++;
    }
}
       
    start();
      
}
var t; 
var y=0;
var i;
var d;

var indx=0;
function val(d=this.id){
   
    if(document.getElementById(d).value==0){
        y=0;
    }
    if(document.getElementById("st").disabled==false){
        document.getElementById("st").disabled=true;
    }
if(document.getElementById(d).value==y){
    if((mode==="easy"&&(t>40))||(mode==="med"&&(t>60))||(mode==="tuf"&&(t>80))){
        document.getElementById(d).disabled=true;
        
       document.getElementById(d).value="";
        
        t++;
    }
    
    else{
        document.getElementById(d).value=t;
        document.getElementById(d).style.backgroundColor= rgb(255-(t*4),255-(t*4),255-(t*4));
        t++;
      
    
        
    }
    if((mode==="easy"&&t>56)||(mode==="med"&&t>76)||(mode==="tuf"&&t>96)){
      reset();
        if(mode=="easy"){
        localStorage.setItem("Init_easy","initialized");
        }
        if(mode=="med"){
            localStorage.setItem("Init_medium","initialized");
        }
        if(mode=="tuf"){
            localStorage.setItem("Init_tuf","initialized");
        }
        
      }
        y++;
}
else{   if(mode=="easy"){
         for(i=0;i<16;i++){
          document.getElementById(i).disabled=true;
        }
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
var best_time;
if(mode==="easy"&&(localStorage.getItem("best_time_easy")!=="null")){
best_time=localStorage.getItem("best_time_easy");
}
if(mode==="med"&&(localStorage.getItem("best_time_med")!=="null")){
best_time=localStorage.getItem("best_time_med");
}
if(mode==="tuf"&&(localStorage.getItem("best_time_tuf")!=="null")){
    best_time=localStorage.getItem("best_time_tuf");
}
let best=new Array(6);
let dummy=new Array(5);
var curr_time;


function start(){
    timer=self.setInterval("increment()",(1000000/divide));
       
   
}
var c=0;
function increment(){
    x++;
    document.getElementById("timer_out").innerHTML=(x);
    
   
   curr_time=(x*10)/divide;

    
}
function stop(){
    if((mode==="easy"&&t>56)||(mode==="med"&&t>76)||(mode==="tuf"&&t>96)){
    if(best[4]==="null"||best.length<4){
        if(best[3]==="null"||best.length<3){
            if(best[2]==="null"||best.length<2){
                if(best[1]==="null"||best.length<1){
                    if(best[0]==="null"||best.length==0){
                        best[0]=curr_time;
                        curr_time=null;
                        count=1;
                        
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
    
        if(mode==="easy"){
          localStorage.setItem("best_time_1_easy",best[0]);
          localStorage.setItem("best_time_easy",best[0]);
          localStorage.setItem("best_time_2_easy",best[1]);
          localStorage.setItem("best_time_3_easy",best[2]);
          localStorage.setItem("best_time_4_easy",best[3]);
          localStorage.setItem("best_time_5_easy",best[4]);
        }
          if(mode==="med"){
          localStorage.setItem("best_time_1_med",best[0]);
          localStorage.setItem("best_time_med",best[0]);
          localStorage.setItem("best_time_2_med",best[1]);
          localStorage.setItem("best_time_3_med",best[2]);
          localStorage.setItem("best_time_4_med",best[3]);
          localStorage.setItem("best_time_5_med",best[4]);
        }
        if(mode==="tuf"){
          localStorage.setItem("best_time_1_tuf",best[0]);
          localStorage.setItem("best_time_tuf",best[0]);
          localStorage.setItem("best_time_2_tuf",best[1]);
          localStorage.setItem("best_time_3_tuf",best[2]);
          localStorage.setItem("best_time_4_tuf",best[3]);
          localStorage.setItem("best_time_5_tuf",best[4]);
        }


    }
   else{
       if(curr_time!=null){
        best[5]=curr_time;
           
        count=6;
           best=best.slice(0,count).sort(function(a,b){
             return a-b;});
 if(mode==="easy"){
          localStorage.setItem("best_time_1_easy",best[0]);
          localStorage.setItem("best_time_easy",best[0]);
          localStorage.setItem("best_time_2_easy",best[1]);
          localStorage.setItem("best_time_3_easy",best[2]);
          localStorage.setItem("best_time_4_easy",best[3]);
          localStorage.setItem("best_time_5_easy",best[4]);
        }
          if(mode==="med"){
          localStorage.setItem("best_time_1_med",best[0]);
          localStorage.setItem("best_time_med",best[0]);
          localStorage.setItem("best_time_2_med",best[1]);
          localStorage.setItem("best_time_3_med",best[2]);
          localStorage.setItem("best_time_4_med",best[3]);
          localStorage.setItem("best_time_5_med",best[4]);
        }
        if(mode==="tuf"){
          localStorage.setItem("best_time_1_tuf",best[0]);
          localStorage.setItem("best_time_tuf",best[0]);
          localStorage.setItem("best_time_2_tuf",best[1]);
          localStorage.setItem("best_time_3_tuf",best[2]);
          localStorage.setItem("best_time_4_tuf",best[3]);
          localStorage.setItem("best_time_5_tuf",best[4]);
        }
           curr_time=null;
    
       }
       
    }

          
    }
    for(i=0;i<5;i++){
        if(best[i]==="null"||!best[i]){
            dummy[i]=0;
            
        }
        else{
            dummy[i]=1;
         
        }
    }
     if(mode==="easy"){
        best_time=localStorage.getItem("best_time_easy");
           if(dummy[0]==1&&best[0]!=="undefined"){
document.getElementById("best_time").innerHTML=(best[0]);
document.getElementById("best_time_1_easy").innerHTML=(best[0]);
             }
           if(dummy[1]==1&&best[1]!=="undefined"){
            document.getElementById("best_time_2_easy").innerHTML=(best[1]); }
           if(dummy[2]==1&&best[2]!=="undefined"){
            document.getElementById("best_time_3_easy").innerHTML=(best[2]); }
           if(dummy[3]==1&&best[3]!=="undefined"){
           document.getElementById("best_time_4_easy").innerHTML=(best[3]); }
           if(dummy[4]==1&&best[4]!=="undefined"){
         document.getElementById("best_time_5_easy").innerHTML=(best[4]); }
     }
        if(mode==="med"){
        best_time=localStorage.getItem("best_time_med");
           if(dummy[0]==1&&best[0]!=="undefined"&&best[0]!=="undefined"&&best[0]!=="undefined"&&best[0]!=="undefined"&&best[0]!=="undefined"){
             document.getElementById("best_time").innerHTML=(best[0]);
             document.getElementById("best_time_1_med").innerHTML=(best[0]);
             }
           if(dummy[1]==1&&best[1]!=="undefined"){
            document.getElementById("best_time_2_med").innerHTML=(best[1]); }
           if(dummy[2]==1&&best[2]!=="undefined"){
            document.getElementById("best_time_3_med").innerHTML=(best[2]); }
           if(dummy[3]==1&&best[3]!=="undefined"){
           document.getElementById("best_time_4_med").innerHTML=(best[3]); }
           if(dummy[4]==1&&best[4]!=="undefined"){
         document.getElementById("best_time_5_med").innerHTML=(best[4]); }
     }
        if(mode==="tuf"){
        best_time=localStorage.getItem("best_time_tuf");
           if(dummy[0]==1&&best[0]!=="undefined"){
             document.getElementById("best_time").innerHTML=(best[0]);
             document.getElementById("best_time_1_tuf").innerHTML=(best[0]);
             }
           if(dummy[1]==1&&best[1]!=="undefined"){
            document.getElementById("best_time_2_tuf").innerHTML=(best[1]); }
           if(dummy[2]==1&&best[2]!=="undefined"){
            document.getElementById("best_time_3_tuf").innerHTML=(best[2]); }
           if(dummy[3]==1&&best[3]!=="undefined"){
           document.getElementById("best_time_4_tuf").innerHTML=(best[3]); }
           if(dummy[4]==1&&best[4]!=="undefined"){
         document.getElementById("best_time_5_tuf").innerHTML=(best[4]); }
     }
   
    
    
    clearInterval(timer);
   
    timer=null;
}
function reset_time(){
    stop();
    x=0;
   document.getElementById("timer_out").innerHTML=(x/divide); 
    
    
}
function init_easy(){
    var f;
    f=localStorage.getItem("Init_easy");
    if(f=="initialized"){
best[0]=localStorage.getItem("best_time_1_easy");
best[1]=localStorage.getItem("best_time_2_easy");
best[2]=localStorage.getItem("best_time_3_easy");
best[3]=localStorage.getItem("best_time_4_easy");
best[4]=localStorage.getItem("best_time_5_easy");
        if(best[0]!=="null"||(best[0])){
             if(best[0]!=="undefined"){
document.getElementById("best_time").innertext=(best[0]);
document.getElementById("best_time_1_easy").innertext=(best[0]);
        }
        }
        if(best[1]!=="null"||(best[1])){
             if(best[1]!=="undefined"){
document.getElementById("best_time_2_easy").innertext=(best[1]); 
             }
             }
        if(best[2]!=="null"||(best[2])){
             if(best[2]!=="undefined"){
document.getElementById("best_time_3_easy").innertext=(best[2]); 
        }
        }
        if(best[3]!=="null"||(best[3])){
             if(best[3]!=="undefined"){
document.getElementById("best_time_4_easy").innertext=(best[3]);
        }
        }
        if(best[4]!=="null"||(best[4])){
             if(best[4]!=="undefined"){
document.getElementById("best_time_5_easy").innertext=(best[4]); 
        }
        }
    }
     else{
 best[0]="null";
best[1]="null";
best[2]="null";
best[3]="null";
best[4]="null";
         localStorage.setItem("best_time_easy",null);
      localStorage.setItem("best_time_1_easy",null);
     localStorage.setItem("best_time_2_easy",null);
     localStorage.setItem("best_time_3_easy",null);
     localStorage.setItem("best_time_4_easy",null);
     localStorage.setItem("best_time_5_easy",null); 
    }
    
}
function init_medium(){
    var f;
    f=localStorage.getItem("Init_medium");
    if(f=="initialized"){
best[0]=localStorage.getItem("best_time_1_med");
best[1]=localStorage.getItem("best_time_2_med");
best[2]=localStorage.getItem("best_time_3_med");
best[3]=localStorage.getItem("best_time_4_med");
best[4]=localStorage.getItem("best_time_5_med");    
        if(best[0]!=="null"||(best[0])){
             if(best[0]!=="undefined"){
document.getElementById("best_time").innertext=(best[0]);
        }
        if(best[0]!=="null"||(best[0])){
document.getElementById("best_time_1_med").innertext=(best[0]);
        }
        }
        if(best[1]!=="null"||(best[1])){
             if(best[1]!=="undefined"){
document.getElementById("best_time_2_med").innertext=(best[1]); 
        }
        }
            if(best[2]!=="null"||(best[2])){
                 if(best[2]!=="undefined"){
document.getElementById("best_time_3_med").innertext=(best[2]); 
                 }
            }
        if(best[3]!=="null"||(best[3])){
             if(best[3]!=="undefined"){
document.getElementById("best_time_4_med").innertext=(best[3]);
             }
        }
        if(best[4]!=="null"||(best[4])){
             if(best[4]!=="undefined"){
document.getElementById("best_time_5_med").innertext=(best[4]); 
             }
        }
    }
    else{
         best[0]="null";
best[1]="null";
best[2]="null";
best[3]="null";
best[4]="null";
         localStorage.setItem("best_time_med",null);
      localStorage.setItem("best_time_1_med",null);
     localStorage.setItem("best_time_2_med",null);
     localStorage.setItem("best_time_3_med",null);
     localStorage.setItem("best_time_4_med",null);
     localStorage.setItem("best_time_5_med",null); 
    }
}
function init_tuf(){
    var f;
    f=localStorage.getItem("Init_tuf");
    if(f=="initialized"){
best[0]=localStorage.getItem("best_time_1_tuf");
best[1]=localStorage.getItem("best_time_2_tuf");
best[2]=localStorage.getItem("best_time_3_tuf");
best[3]=localStorage.getItem("best_time_4_tuf");
best[4]=localStorage.getItem("best_time_5_tuf"); 
        if(best[0]!=="null"||(best[0])){
            if(best[0]!=="undefined"){
document.getElementById("best_time").innertext=(best[0]);
        }
        if(best[0]!=="null"||(best[0])){
document.getElementById("best_time_1_tuf").innertext=(best[0]);
        }
        }
        if(best[1]!=="null"||(best[1])){
              if(best[1]!=="undefined"){
document.getElementById("best_time_2_tuf").innertext=(best[1]);
        }
        }
         
        if(best[2]!=="null"||(best[2])){
            if(best[2]!=="undefined"){
document.getElementById("best_time_3_tuf").innertext=(best[2]); 
        }
         }
        
        if(best[3]!=="null"||(best[3])){
             if(best[3]!=="undefined"){
document.getElementById("best_time_4_tuf").innertext=(best[3]);
             }
        }
        if(best[4]!=="null"||(best[4])){
             if(best[4]!=="undefined"){
document.getElementById("best_time_5_tuf").innertext=(best[4]);
             }
        }
    }
  else{
best[0]="null";
best[1]="null";
best[2]="null";
best[3]="null";
best[4]="null";
         localStorage.setItem("best_time_tuf",null);
      localStorage.setItem("best_time_1_tuf","null");
     localStorage.setItem("best_time_2_tuf","null");
     localStorage.setItem("best_time_3_tuf","null");
     localStorage.setItem("best_time_4_tuf","null");
     localStorage.setItem("best_time_5_tuf","null"); 
    }
}

function rgb(r , g, b){
    return "rgb("+r+","+g+","+b+")";
}
function mod(mode=this.id){
    if(mode=="E"){
        window.mode='easy';
           if(z_easy==0){
init_easy();
 z_easy++;   }
        best_time=localStorage.getItem("best_time_easy");
         if(best_time!=="null"){
        document.getElementById("best_time").innerHTML=best_time;
         }
        else{
             document.getElementById("best_time").innerHTML=0.00;
        }
        reset();
        
        
    }
    if(mode=="M"){
        window.mode='med';
        if(z_medium==0){
init_medium();
 z_medium++;   }
        reset(); 
        best_time=localStorage.getItem("best_time_med");
         if(best_time!=="null"){
        document.getElementById("best_time").innerHTML=best_time;
         }
        else{
             document.getElementById("best_time").innerHTML=0.00;
        }
    }
    if(mode=="H"){
        window.mode='tuf';
           if(z_tuf==0){
init_tuf();
 z_tuf++;   }
        reset();
          best_time=localStorage.getItem("best_time_tuf");
        if(best_time!=="null"){
        document.getElementById("best_time").innerHTML=best_time;
        }
        else{
             document.getElementById("best_time").innerHTML=0.00;
        }
        
    }
}
 


