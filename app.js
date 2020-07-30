window.onload=function(){
    show(0)
}
var questions=[{
    id:1,
    question:"Who was the Founder of Pakistan",
    answer:"Quaid-e-Azam",
    options:[
        "Alama Muhammad Iqbal",
        "Quaid-e-Azam",
        "Mohsin-ul-Mulk",
        "Tipu Sultan"
    ]
},
{
id:2,
question:"Who was the last sultan of Ottoman Empire",
answer:"Sultan Hamid Gul",
options:[
    "sultan usman",
    "Sultan suleman",
    "Sultan Hamid Gul",
    "Tipu Sultan"
]
},
{
id:3,
question:"Who was the founder of Modern Turkey",
answer:"Mustafa Kamal Attaturk",
options:[
    "Mustafa Kamal Attaturk",
    "Tayyab Erdogan",
    "sultan saleem 1",
    "Siraj-ud-doula"
]
},
{
id:4,
question:"What Movement is made to support Khilafat in Sub-continent",
answer:"Khilafat Movement",
options:[
    "Alama Muhammad Iqbal",
    "muslim british movement",
    "muslim league",
    "Khilafat Movement"
]
},
{
id:5,
question:"who was the conquest of Sominath city",
answer:"Mehmood Ghaznavi",
options:[
    "Mehmood Ghaznavi",
    "Akbar",
    "Jahangir",
    "Tipu Sultan"
]
},

]
var count1=document.getElementById("count")
count1=1
count.innerHTML=count1+"/5"
var question_count=0;
function next(){
    question_count++;
    result()   
    show(question_count)
    count1++
    count.innerHTML=count1+"/5"
}

function show(e){
    var ques=document.getElementById("question")
    ques.innerHTML=`"<h1>"${questions[e].question}"</h1>"
    <ul class="list">
                        <li class="option">${questions[e].options[0]}</li>
                        <li class="option">${questions[e].options[1]}</li>
                        <li class="option">${questions[e].options[2]}</li>
                        <li class="option">${questions[e].options[3]}</li>
                    </ul>`

                    Active()
}


function Active(){
    let option1=document.querySelectorAll("li.option")

    for(let i = 0; i < option1.length; i++) {
        option1[i].onclick = function(){
            for(let j=0;j<option1.length;j++){
                if(option1[j].classList.contains("active"))
                option1[j].classList.remove("active")
            }
        console.log(option1[i].classList.add("active"))
        }
    }
}


let num1=document.getElementById("num")
num1=0;

function result(){

    var active=document.getElementsByClassName("active")
              if(active[0].innerHTML==questions[0].answer){
                num1+=10;
                console.log(num.innerHTML=num1) 
               
              }
              else if(active[0].innerHTML==questions[1].answer){
                num1+=10;
                console.log(num.innerHTML=num1) 
               
              }
              else if(active[0].innerHTML==questions[2].answer){
                num1+=10;
                console.log(num.innerHTML=num1) 
               
              }
              else if(active[0].innerHTML==questions[3].answer){
                num1+=10;
                console.log(num.innerHTML=num1) 
               
              }
              else if(active[0].innerHTML==questions[4].answer){
                num1+=10;
                console.log(num.innerHTML=num1) 
              
              }
    }
