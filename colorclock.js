
var d, h, m, s;
function displayTime() {
   
    d = new Date(); 
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

   
    if (h <= 9) h = '0' + h;
    if (m <= 9) m = '0' + m;
    if (s <= 9) s = '0' + s;
    
    
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    
    setTimeout(displayTime, 1000);
}


displayTime();
