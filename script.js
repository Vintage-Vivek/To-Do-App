const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // yeh hamesh naye element ko add karne baad call ho uske liye yahan call karenge
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // yeh hamesh naye checked or unchecked elements ko save karne baad call ho uske liye yahan call karenge
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // yeh hamesh element ko remove karne baad call ho uske liye yahan call karenge
    }
}, false);

// Ab hamara data hamesha show hota rhaye website par uske liye we are writting the code further

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Ab hamara data hamesha show hota rhaye website par uske liye we are writting the code further

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

// https://youtu.be/G0jO8kUrg-I?si=GLw8XqgBfWnGqdJ3 -- for help in the code