let timeEl = document.querySelector(".time");


function updateTime() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let flag = "AM"
    if(hour > 12){
        hour = hour - 12;
        flag = "PM"
    }else if(hour == 00){
        hour = 12;
        flag = "AM"
    }
    hour = hour < 10 ? "0"+hour : hour;
    min = min < 10 ? "0"+ min : min;
    secs = secs < 10 ? "0"+secs : secs;
    timeEl.innerText = `${hour}:${min}:${secs} ${flag}`;
}

setInterval(updateTime,1000)
