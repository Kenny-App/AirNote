const menu = document.getElementById("hamburger");
const close = document.getElementById("hamburger-close");
const option = document.querySelector(".nav-option")
const optionham = document.getElementById("menu-option")
const answers = document.querySelectorAll(".answer");
const faqBox = document.querySelectorAll(".faq-box");
const challenge = document.getElementById("challenges");
const randomBtn = document.getElementById("random-btn");
let youtubeLink = document.getElementById("youtube-url");
const copybtn = document.querySelector(".copybtn");
let message = "";
let note;
const areas = document.querySelectorAll('area');

//play music
    areas.forEach(area =>{
        area.addEventListener("click", function(e) {
            e.preventDefault();
            note = this.dataset.note;
            playNote(note);
        })
    })


function playNote(note){
    let audio = document.getElementById(note);
    audio.play();
    }

//validate form
document.addEventListener("DOMContentLoaded", ()=>{
let contactForm = document.getElementById("contact-form");
let email = document.getElementById("email");
let comment = document.getElementById("comment");

contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateEmail();
});

function validateEmail(){
    let emailvalue = email.value.trim();
    let commentvalue = comment.value;

    if (emailvalue === '' || !emailvalue.includes("@") || !emailvalue.includes(".")){
        email.style.border = "3px red solid"
    }
    else{
        email.style.border = "3px green solid"
    }
    if (commentvalue === ''){
        comment.style.border = "3px red solid"
    }
    else{
        comment.style.border = "3px green solid"
    }

}
})

//faq box effect
faqBox.forEach(box => {
    box.addEventListener("click", ()=>{
        box.classList.toggle("show-answer");
    })

});

//visible and hidden hamburger
function sizescreen() {
if(window.innerWidth <= 856){
    if(close.classList.contains("inactive")){
    menu.classList.remove("inactive");
}
option.classList.add("inactive");

}
else{
    menu.classList.add("inactive");
    close.classList.add("inactive")
    option.classList.remove("inactive");
    optionham.classList.remove("showMenu")

}
}

sizescreen();
window.addEventListener("resize", sizescreen);

menu.addEventListener("click", ()=>{
    if(!menu.classList.contains("inactive")){
        menu.classList.add("inactive");
        close.classList.remove("inactive");
        optionham.classList.add("showMenu")
    }
});
close.addEventListener("click", ()=>{
        if(!close.classList.contains("inactive")){
        close.classList.add("inactive");
        menu.classList.remove("inactive");
         optionham.classList.remove("showMenu")
    }
})

//generate random youtube link
const youtubeUrl = [
    "https://www.youtube.com/embed/BMto9YkOuis?si=7zEkhfw0sHoqUPiD",
    "https://www.youtube.com/embed/-WElzS0aJmM?si=qoyvL2q7R5dQThiM",
    "https://www.youtube.com/embed/einl3CzAp1E?si=ItpgnYw3wKidcUap",
    "https://www.youtube.com/embed/i7OcdU7P0Iw?si=_HiWKDqsE2YIJJvC",
    "https://www.youtube.com/embed/iG9HEpaBOTA?si=AWkCQjoZdQKrWOoq",
    "https://www.youtube.com/embed/wPSDfvKPPLo?si=3zrHz1dxVvruAGwp",
    "https://www.youtube.com/embed/gGPsQq1SBaI?si=gUj0B7Jc3tV7RV4D",
    "https://www.youtube.com/embed/Pp79kBr2sEk?si=3uVOHGOQA0D0NbQO",
    "https://www.youtube.com/embed/P59cJIh2qqM?si=W9L-pRQdAK8RSp39",
    "https://www.youtube.com/embed/tau2PG1JdSU?si=fBkKXvXRNokWPvya",
    "https://www.youtube.com/embed/HoYV0ynLe9o?si=Dq9hsIFhHgTDXew7",
    "https://www.youtube.com/embed/jXB1FuCXAI8?si=6Khukv4A29QbUVxK",
    "https://www.youtube.com/embed/aFzoTJL98Ic?si=SSLu-YWCu2i-b6zc",
    "https://www.youtube.com/embed/n_E8bGOiwdg?si=fYWkfYw0Px241T3D",
    "https://www.youtube.com/embed/46DtTSchMoM?si=2u_RjMM8rGNE2c2r",
    "https://www.youtube.com/embed/Mbd74p16vWM?si=NeCTb2aNM5Ll5UbA",
    "https://www.youtube.com/embed/Mijs3yVrrqw?si=oCZzdhEmE0on7YJV",
    "https://www.youtube.com/embed/Mijs3yVrrqw?si=8FdHRT7o_iZ9R4qx",
    "https://www.youtube.com/embed/DdqxWpDduNc?si=40Z5Iug5Oy5KPFld",
    "https://www.youtube.com/embed/7SdMOiDyNA4?si=dwrdv6A0voUTvT9Z",
    "https://www.youtube.com/embed/sdC9mE_fKHI?si=C69Uxli7yfxnfGfZ",
    "https://www.youtube.com/embed/h_Keu-BDYWc?si=v49_ZrpWTfiP7cQX",
    "https://www.youtube.com/embed/J1KNCNjHN5U?si=SPF2cjU4CgaZLTq7",
    "https://www.youtube.com/embed/i1F_eQkOfvU?si=iuWmVR0kgWx8YXjy",
    "https://www.youtube.com/embed/q5btETW04Zg?si=r1rNQnCHuOcQVeVU",
    "https://www.youtube.com/embed/cZWYZHPQJg8?si=KrNrWyS_50Y_dVKD",
    "https://www.youtube.com/embed/5f6_aIyWN48?si=oL117yFUWObVl1OI",
    "https://www.youtube.com/embed/w3WpV6aih2U?si=_WO9TQvafhbEesLa",
    "https://www.youtube.com/embed/GdPIlT6rSo4?si=otDJ4DHm1NwLNmIx",
    "https://www.youtube.com/embed/VO1f2CIiRdY?si=FA11_SQuUYzHNnvp",
    "https://www.youtube.com/embed/DRSBhSlg-Rg?si=7DiEQhGYhhxLIfOH",
    "https://www.youtube.com/embed/9iM2YWWtj7A?si=XNRKEuVq1AngnDNq",
    "https://www.youtube.com/embed/KWLtHvDfq_E?si=WGBsESrHPO9pqzC2",
    "https://www.youtube.com/embed/D08-VgR-5PE?si=paPnMGLL5MWQXtrg",
    "https://www.youtube.com/embed/3TM2NZfvWmQ?si=KTv7s9hBP0irv_8i",
    "https://www.youtube.com/embed/2DaflHlpJfY?si=IVIR2XSzddat8uFt"
];

console.log(message)

function randomLink(){
   let index = Math.floor(Math.random() * 35);
   message  = "https://www.youtube.com/watch?v=" + youtubeUrl[index].substring(30, 41);
   youtubeLink.value = message;
   challenge.src = youtubeUrl[index];
}
function copytxt(){
    youtubeLink.select();
    document.execCommand("copy");
}
copybtn.addEventListener("click" , copytxt);
randomBtn.addEventListener("click", randomLink);
