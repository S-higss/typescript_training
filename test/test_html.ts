var screenMsg:string = "HelloWorld";
window.onload = () => {
    const target = document.getElementById("test1") as HTMLInputElement;
    target.innerText = screenMsg;
}