function SendData(){
    var text = document.getElementById("text-1").value;
    //form Data
    var f = new FormData();
    f.append("text",text);
//ajax request
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    //server status
    if(xhr.readyState == 4 && xhr.status == 200){
        //server response
        var res = xhr.responseText;
        console.log(res);
    }
}

xhr.open("POST","process.php",true);
xhr.send(f);

}