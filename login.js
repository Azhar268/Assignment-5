const completeButtons = document.querySelectorAll(".bg-blue-600.px-5.text-white.rounded-xl");





for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    const clickedButton = event.target;   
    clickedButton.disabled = true;
    
    alert("Board Updated Successfully!");
    
    
    const navCount = document.getElementById("navcount").innerText;
    const convertedNavCount= parseInt(navCount);
    const sum=convertedNavCount+1;
    document.getElementById("navcount").innerText=sum;

    clickedButton.classList.remove("bg-blue-600");
    clickedButton.classList.add("bg-gray-400");

    const taskCount=document.getElementById("taskcount").innerText;
    const convertedTaskCount=parseInt(taskCount);
    const abs=convertedTaskCount-1;
    document.getElementById("taskcount").innerText="0"+abs;
   
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    
    const parentDiv = clickedButton.parentElement.parentElement;  
const title = parentDiv.querySelector("h2").innerText;

let history= document.createElement("div");
history.classList.add("history");
history.innerHTML=`<div class="bg-[#F4F7FF] rounded-lg p-5 mt-5 mx-5">
                <p>You have Complete The Task "${title}" at ${currentTime}.</p>
               </div>`;
    document.getElementById("seconddiv").appendChild(history);

})};



document.getElementById("clear").addEventListener("click",function(event){
    event.preventDefault();
    const historyDivs = document.querySelectorAll(".history");
    for (let i = 0; i < historyDivs.length; i++) {
     historyDivs[i].style.display = "none";
    }
    
});

document.getElementById("nextpage").addEventListener("click",function(event){
    event.preventDefault();

    window.location.href="./page.html";
});
let currentDate = new Date();
let formattedDate = currentDate.toDateString();
    document.getElementById("currentdate").textContent = formattedDate;