const searchBar = document.querySelector("input");
const searchButton = document.querySelector("button");

const path = "https://www.youtube.com/results?search_query=";
const search_query = "baby shark";

window.addEventListener("keypress", keyEvent=>{
    if(keyEvent.key==="Enter") window.open(`${path}${searchBar.value}`);
})