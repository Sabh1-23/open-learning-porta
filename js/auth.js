function register(){
const user=username.value;
const pass=password.value;
const tx=db.transaction(["users"],"readwrite");
const store=tx.objectStore("users");
const req=store.get(user);
req.onsuccess=()=>{
if(req.result) return alert("User exists");
store.add({username:user,password:pass});
alert("Registered!");
};
}

function login(){
const user=username.value;
const pass=password.value;
const tx=db.transaction(["users"],"readonly");
const store=tx.objectStore("users");
const req=store.get(user);
req.onsuccess=()=>{
if(req.result && req.result.password===pass){
localStorage.setItem("user",user);
window.location.href="dashboard.html";
}else alert("Invalid login");
};
}

function logout(){
localStorage.removeItem("user");
window.location.href="index.html";
}