function currTime(){
    var date =new Date ();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";
    if (h === 0)
    {
        h = 12;
    }
    if(h>12)
    {
        h = h-12;
        session="PM";
    }
    h=(h<10) ? "0"+h :h
    h=(m<10) ? "0"+m :m
    h=(s<10) ? "0"+s :s
    var time = h + ":" + m +":"+ S + "" + session;
    document.getElementById("digitalClock").innerText=time;
    document.getElementById("digitalClock").textContent=time;
    setTimeout(currTime,1000);

}