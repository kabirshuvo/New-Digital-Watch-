function clock(){

    //collecting the display Areas By #Ids
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    // getting Hours Munits Seconds form the global new Date(CallBack functions)
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //Making the Clock Twelve Hours, 

    if(h > 12){
        h = h - 12;
    }

    //Adding '0' to the singleDigit numbers
    h= (h < 10) ? '0' + h : h;
    m= (m < 10) ? '0' + m : m;
    s= (s < 10) ? '0' + s : s;

    //Setting displayValues
    hours.innerHTML     = h;
    minutes.innerHTML   = m;
    seconds.innerHTML   = s;
}

    //Creating the function 
    let interval = setInterval(clock, 1000);
