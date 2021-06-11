
var z=document.getElementById('random');
var v=document.getElementById('head')
var z1=document.getElementById('amount');
var scr=document.getElementById('txt');
var score=0;
var items = ['clear','sky','poojan','akash','love','noob','free','history','nice','USA','akshat','chirayu','jayesh','dhanesh','FreeFire','pubg','callofduty','bhavyesh','Aifaz','India','Chennai','salmaan','heuristic','javascript','java','prototype'];
fs.addEventListener("click",function(event){
    event.preventDefault();
    scr.innerHTML=0;








        
  
    random_item(items)
})



function random_item(items)
{
    z1.value="";
    document.getElementById('id').innerHTML=5;
    
     var k=items[Math.floor(Math.random()*items.length)];
     z.innerHTML=k;
      id=document.getElementById("id")
      var counter=5;
      setInterval(function(){
      counter--;
      if(counter>=0){
          id.innerHTML=counter;
          if(counter==0){
            check()
        }
      }
      },1000)
    //   if(counter==0){
    //       check()
    //   }


    function check(){
      if(k==z1.value){
      
      v.innerHTML="Correct !!!"
      score=score+2;
      scr.innerHTML=score;
      random_item(items)
      setInterval(function(){
      v.innerHTML="Result"

      },10000)
      
      }
      else{
      v.innerHTML="Failed !!!"
      scr.innerHTML=score;
      z1.value="";
      // scr.innerHTML=0;
      setInterval(function(){
        v.innerHTML="Result"
  
        },3000)
      
      }
      
    

    }

     
}






