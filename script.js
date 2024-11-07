const form = document.querySelector(".form");
const listContainer = document.querySelector(".todo-container");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const box = document.querySelector("#text-box");
    if(box.value==""){
        return ;
    }
    const list = document.createElement("li");
    list.innerHTML=box.value;
    const span = document.createElement("span");
    span.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(39, 66, 106)"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
    `
    list.append(span);
    listContainer.append(list)
    setData();
    box.value="";
})


listContainer.addEventListener("click",(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("done")
        setData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        setData();
    }
},true)

function setData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();