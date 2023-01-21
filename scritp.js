function addToBreakfast(){
    const changeText = document.getElementById("tb").value;
    document.getElementById("p1").innerHTML = changeText;
    console.log(changeText);
}
function addToLunch(){
    const newText = document.getElementById("tb").value;
    document.getElementById("p2").innerHTML = newText;
}
function addToDinner(){
    const newText = document.getElementById("tb").value;
    document.getElementById("p3").innerHTML = newText;
}