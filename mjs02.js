var comment=document.getElementById("comment");
var button=document.getElementById("button");
var input=document.getElementById("input");

button.addEventListener("click",function(){
    var newComment=document.createElement('li');
    newComment.innerHTML=input.value;
    comment.appendChild(newComment);
    input.value=""
})