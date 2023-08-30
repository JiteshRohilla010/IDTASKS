const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    saveData ();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData ();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData ();
    }
}, false);

function saveData (){
    localStorage.setItem("data", listcontainer.innerHTML);
}


// Below commented code is used for to save the data on server and not refresh it after refreshed or again open this. 
// until we agian restart this site.

// function showTask(){
//     listcontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();



