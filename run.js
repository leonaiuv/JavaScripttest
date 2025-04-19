let businessClick = document.querySelector(".business");
let switchs = true;
businessClick.onclick = () =>{
    if (switchs) {
        businessClick.innerText = "建设中...";
    } else {
        businessClick.innerText = "高级编程"; 
    }
    switchs = !switchs;
}