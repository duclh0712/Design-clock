let hr = document.querySelector('#hours');
let mn = document.querySelector('#minutes');
let sc = document.querySelector('#seconds');

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotate(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;

    // analog

    let h = document.querySelector('.hhh');
    let m = document.querySelector('.mmm');
    let s = document.querySelector('.sss');

    
    let hhh = new Date().getHours();
    let mmm = new Date().getMinutes();
    let sss = new Date().getSeconds();
    
    hhh = (hhh < 10) ? "0" + hhh : hhh;
    mmm = (mmm < 10) ? "0" + mmm : mmm;
    sss = (sss < 10) ? "0" + sss : sss;
    h.innerHTML = hhh + '<b>:</b>';
    m.innerHTML = mmm + '<b>:</b>';
    s.innerHTML = sss;
})