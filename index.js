let val=document.getElementById("input");
function add(v) {
   
val.value +=v;

}
function exe(){
    val.value=eval(val.value);
}
function cls(){
    val.value="";
}
function del(){
    val.value= val.value.substr(0, val.value.length-1);
}