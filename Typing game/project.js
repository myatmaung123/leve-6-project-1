let random = document.querySelector("#random");

const url = `https://game-of-thrones-quotes.herokuapp.com/v1/random/5`;
async function getData(){
    let response = await fetch(url);
    let data = await response.json();

    let randomWord = Math.floor(Math.random() * data.length)
    random.innerHTML = data[randomWord].sentence;
};
getData();



function skip(){
    getData();
    typed.value = "";
};

let typed = document.querySelector("#type");
let displayScore = document.querySelector("#score");
let displayScored = document.querySelector("#scored")
let score = 0;

typed.addEventListener("keyup", () => {
    if(typed.value == random.innerText){
        score++;
        displayScore.innerHTML = score;
        displayScored.innerHTML = score;
        getData();
        typed.value = "";
        let exTime = [2,4,6,8,15];
        let randomNumber = Math.floor(Math.random() * exTime.length);
        let randomTime = exTime[randomNumber]
        time+= randomTime;
    }
})

let time = 31;

function displayTime(){
    let count = document.querySelector("#time");
    time--
    count.innerHTML = time + "s";
    if(time == 0){
        clearInterval(counter);
        gameOver();
    }
}

let counter = setInterval(displayTime, 1000);

function gameOver(){
    random.style.display = "none";
    typed.style.display = "none";
    document.getElementById("redo").style.display = "inline-block";
    document.querySelector("#skiped").style.display = "none";
    document.querySelector(".lose").style.display = "inline-block";
}


function relode(){
    window.location.reload();
}

let showUser = document.querySelector("#show");

function popUp(){
    let username = prompt("What is your name")
    localStorage.setItem("storeUser", username)
    showUser.innerHTML = username;
    
}

let storeUser = localStorage.getItem("storeUser");
if(storeUser){
    showUser.innerHTML = storeUser;
}else{
    showUser.innerHTML = "User";
};

var popb = document.querySelector(".popup");

document.querySelector("").addEventListener('click', () => {
    popb.style.display = "flex";
    popb.style.transition = "1s";
})

document.querySelector(".close").addEventListener('click', () => {
    popb.style.display = "none";
    popb.style.transition = "1s";
});
document.querySelector(".show").addEventListener('click', () => {
    popb.style.display = "none";
    popb.style.transition = "1s";
});

let data = new Date();
let hours = data.getHours();
let timed = document.querySelector("#timed");

if(hours >= 1 && hours <=5){
    timed.innerHTML = "hello, Eary morning 🥱";
}else if(hours >= 6 && hours < 12){
    timed.innerHTML = "hello, good moring ☀️";
}else if(hours >= 12 && hours <= 14){
    timed.innerHTML = "hello, good afternoon ⛅️";
}else if(hours >= 15 && hours <= 18){
    timed.innerHtML = "hello, good evening ☁️";
}else if(hours >= 20 && hours <= 24 || hours == 0){
    timed.innerHTML = "hello, good night 😴";
}else {
    timed.innerHTML = "hello, warmly welcome to ⭐️";
};

// let displayScored = document.getElementById("scored");
    
//     () => {
//         var savedScore = document.querySelector("#scored").innerHTML;
//         localStorage.setItem("storeScore", savedScore);
//     };

//     let storeScore = localStorage.getItem("storeScore");
//     if(storeScore){
//         displayScored.innerHTML = storetext;
//     }else{
//         displayScored.innerHTML = "0";
//     }

//     function doDelet(){
//         localStorage.removeItem("storeScore");
//         window.location.reload();
//     }