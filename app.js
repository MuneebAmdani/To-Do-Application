
let work=document.getElementById("text");
let btn=document.getElementById("click");
let workList=document.getElementById("all-work");
btn.addEventListener("click", () => {
    const name=work.value.trim();
    if (name) {
        addNameToList(name);
        work.value = "";
      }
});

function addNameToList(name) {
  workItems=workList.getElementsByClassName("work-item")
    for (let i = 0; i < workItems.length; i++) {
      if (workItems[i].textContent.startsWith(name)) {
        return;
      }
}
    const workItem = document.createElement("p");
  workItem.className = "work-item";
  workItem.textContent = name;
  workList.appendChild(workItem)
}

function removeWork(){
  document.getElementById("all-work").innerHTML=" ";
}