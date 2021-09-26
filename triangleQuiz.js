var form = document.querySelector(".form")
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");


const ans = ["90", "right angled triangle","equilateral"]

function checkScore(){

    let score = 0
    let index = 0
    const result = new FormData(form); 
    for(let value of result.values()){
        // console.log(value);
        if(value === ans[index]){
            score=score+1;
          
        }
        index=index+1;
    }
    output.innerText = "Your Score is " + score
    
}

btn.addEventListener("click",checkScore);