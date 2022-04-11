function view(num)
{
    document.getElementById("Input").value+=num;
}
function clr(){
    document.getElementById("Input").value=' ';
}
function compute(){
    let a = document.getElementById("Input").value;
    let y= eval(a);
    document.getElementById("Input").value = y;
}