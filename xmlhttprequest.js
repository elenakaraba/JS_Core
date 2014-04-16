var xhr = new XMLHttpRequest();
xhr.open("GET", "attendees.json", true);
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4){
        var status = xhr.status;
        if(status>=200 && status<300 || status ===304){
            console.log(xhr.ResponseText);

        }else{
            console.log("Error occurred");
        }
    }
}
xhr.send(null);
