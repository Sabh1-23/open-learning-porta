
const videoLinks=[
"https://www.youtube.com/embed/Gx5qb1uHss4",
"https://www.youtube.com/embed/Ro_MScTDfU4",
"https://www.youtube.com/embed/fWjsdhR3z3c"
];

const container=document.getElementById("videos");
videoLinks.forEach(link=>{
const iframe=document.createElement("iframe");
iframe.src=link;
iframe.allowFullscreen=true;
container.appendChild(iframe);
});

function startQuiz(){
localStorage.setItem("course","python");
window.location.href="quiz.html";
}