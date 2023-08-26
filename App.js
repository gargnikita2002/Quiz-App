const questions=[{
    'que':"Which of the following is the markup language?",
    'a':"HTML",
    'b':"CSS",
    'c':"Javascript",
    'd':"PHP",
    'correct':'a'
},
{
    'que':"Which of the following is the Scripting language?",
    'a':"HTML",
    'b':"C++",
    'c':"Javascript",
    'd':"C",
    'correct':'c'
},
{
    'que':"Which of the following is used for database?",
    'a':"HTML",
    'b':"c",
    'c':"Javascript",
    'd':"SQL",
    'correct':'d'
}
]

let index=0;
const quebox=document.getElementById("queBox");
let total=questions.length;
let right=0, wrong=0;
const optionInput=document.querySelectorAll('.option');
const loadQue=()=>{
    // console.log(index)
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quebox.innerText=`${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}


const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    // console.log(data.correct)
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQue();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }

    )
    return answer;

}
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank you for taking the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>`
}
loadQue();