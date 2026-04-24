const quizzes={
python:[
{q:"Sample Question 1",a:"1"},
{q:"Sample Question 2",a:"2"}
]
};

if(document.getElementById("quiz")){
let course=localStorage.getItem("course");
let index=0,score=0;

function load(){
if(index>=quizzes[course].length){
quiz.innerHTML=`<h2>Score: ${score}</h2><button onclick="location.href='dashboard.html'">Back</button>`;
return;
}

quiz.innerHTML=`
<h3>${quizzes[course][index].q}</h3>
<input id="ans">
<button onclick="submitAns()">Submit</button>`;
}

window.submitAns=()=>{
if(ans.value.toLowerCase()===quizzes[course][index].a) score++;
index++;
load();
};

load();
}