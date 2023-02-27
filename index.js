function d(val){
    document.getElementById("numbers").value+=val;
}


function solve(){
    var screen_value = document.getElementById("numbers").value;
    let result = eval(screen_value);
    document.getElementById("numbers").value = result;
}

function cleard(){
    document.getElementById("numbers").value = "";
}