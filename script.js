
function datowanie() {
let p = document.querySelector("#dzieńtygodnia");
let p1 = document.querySelector("#data");
let p2 = document.querySelector("#dzienroku");
let p3 = document.querySelector("#koniecroku");
const data = new Date();
let day = data.getDay();
let day1 = data.getDate();
let month = data.getMonth();
let year = data.getFullYear();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();
const data1 = new Date(2025,0,1,0,0,0,0);
let time = data.getTime();
let time1 = data1.getTime();
let differenct = time1 - time;
let different1 = Math.ceil(differenct / (1000 * 60 * 60 *24));

p1.innerHTML = `${day1}.${month+1}.${year} ${hour}:${minutes}:${seconds}`;
p2.innerHTML = `Jest to: ${day1} dzień roku`;
p3.innerHTML = `${different1} dni`;


if(day == 1) {
    p.innerHTML = "Poniedziałek,";
}
else if(day == 2) {
    p.innerHTML = "Wtorek,";



}
else if(day == 3) {
    p.innerHTML = "Środa,";

    
}

else if(day == 4) {
    p.innerHTML = "Czwartek,";

    
}

else if(day == 5) {
    p.innerHTML = "Piątek,";

    
}

else if(day == 6) {
    p.innerHTML = "Sobota,";

    
}
else {
    p.innerHTML = "Niedziela,";

}

}
window.setInterval(datowanie,1000);
let h11 = document.querySelectorAll(".hjedynka");
