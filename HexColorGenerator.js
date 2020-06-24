const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexBtn = document.querySelector('.hexBtn');
let currentCode = document.querySelector(".hex");
hexBtn.addEventListener('click',generateHex);
function generateHex(e)
{
    let s="#";
        for(let a=0;a<6;a++)
         {
         let x = Math.floor(Math.random()*hexNumbers.length);
             s+=hexNumbers[x];
         }
    console.log(s);
    currentCode.innerHTML = s;
    document.body.style.backgroundColor = s;
        

}