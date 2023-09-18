

let w=0;
let l=0;
let t=0;
function rock(x)
{
    console.log(x);
    if (x>=0 && x<0.3)
    {
        alert("It's a Tie");
        t++;
        document.getElementById("tie").innerText=`Tied : ${t}`;

    }
    else if (x>=0.3 && x<0.6)
    { 
       
           alert("OOPS! You Lost");
            l=l+1;
            document.getElementById("lost").innerText=`Lost : ${l}`;

        
        
    }
    else 
    {
        alert("You Won!!");
        w++;
        document.getElementById("wins").innerText=`Won : ${w}`;
    }
  
}

function paper(x)
{
   
    console.log(x);
    if (x>=0 && x<0.3)

    {
        alert("You Won!!");
        w=w+1;
        document.getElementById("wins").innerText=`Won : ${w}`;
    }
    else if (x>=0.3 && x<0.6)
    { 
       
        alert("It's a Tie");
            t=t+1;
        
        document.getElementById("tie").innerText=`Tied : ${t}`;

    }
    else 
    {
        alert("OOPS! You Lost");
        l=l+1;
        document.getElementById("lost").innerText=`Lost :  ${l}`;
    }
  
}
function scissor(x)
{
    
    console.log(x);
    if (x>=0 && x<0.3)
    {
        alert("OOPS! You Lost");
        l=l+1;
        document.getElementById("lost").innerText=`Lost :  ${l}`;
    }
    else if (x>=0.3 && x<0.6)
    { 
      
    alert("You Won!!");
            w=w+1;
        
        document.getElementById("wins").innerText=`Won :  ${w}`;

    }
    else 

    {
        alert("It's a Tie");
        t=t+1;
        document.getElementById("tie").innerText=`Tied :  ${t}`;
    }
  
   
}

function reset()

{
    if (w==0 && l==0 && t==0)
    {
        alert("Please Play atleast One Game !!");
    }
    else{
    alert(`Your performance : Won = ${w} , Lost = ${l} , Tie = ${t}`)
    w=0;
    l=0;
    t=0;
    document.getElementById("tie").innerText="Tied : 0";
    document.getElementById("lost").innerText="Lost : 0";
    document.getElementById("wins").innerText="Won : 0";
}
}