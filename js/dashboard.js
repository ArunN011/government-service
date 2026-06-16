

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".mobile-overlay");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");
overlay.classList.toggle("show");

});

}

if(overlay){

overlay.addEventListener("click",()=>{

sidebar.classList.remove("show");
overlay.classList.remove("show");

});

}



const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target / 120;

const updateCounter = ()=>{

if(count < target){

count += speed;

counter.innerText =
Math.floor(count).toLocaleString();

requestAnimationFrame(updateCounter);

}else{

counter.innerText =
target.toLocaleString();

}

};

updateCounter();

});


const requestChartCanvas =
document.getElementById("requestChart");

if(requestChartCanvas){

new Chart(requestChartCanvas,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"
],

datasets:[

{
label:"Citizen Requests",

data:[
12000,
14500,
13800,
17000,
21000,
23500,
26000
],

borderColor:"#2563eb",

backgroundColor:
"rgba(37,99,235,.15)",

fill:true,

tension:.4,

borderWidth:3

},

{
label:"Resolved Requests",

data:[
10000,
12500,
12000,
15000,
18000,
20500,
23000
],

borderColor:"#10b981",

backgroundColor:
"rgba(16,185,129,.10)",

fill:true,

tension:.4,

borderWidth:3

}

]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{
position:"top"
}

},

scales:{

y:{
beginAtZero:true
},

x:{
grid:{
display:false
}
}

}

}

});

}


const budgetChartCanvas =
document.getElementById("budgetChart");

if(budgetChartCanvas){

new Chart(budgetChartCanvas,{

type:"doughnut",

data:{

labels:[
"Health",
"Transport",
"Water",
"Urban"
],

datasets:[{

data:[
35,
25,
20,
20
],

backgroundColor:[

"#2563eb",
"#7c3aed",
"#10b981",
"#f59e0b"

],

borderWidth:0

}]

},

options:{

responsive:true,

plugins:{

legend:{
position:"bottom"
}

},

cutout:"70%"

}

});

}



const notification =
document.querySelector(".notification");

if(notification){

notification.addEventListener("click",()=>{

notification.style.transform =
"scale(.9)";

setTimeout(()=>{

notification.style.transform =
"scale(1)";

},150);

});

}


const statusText =
document.querySelector(".live-left p");

if(statusText){

let minute = 2;

setInterval(()=>{

minute++;

statusText.textContent =
`Last updated ${minute} minutes ago`;

if(minute > 59){
minute = 1;
}

},10000);

}



const revealElements =
document.querySelectorAll(
".stat-card,.card,.department-card,.ai-card"
);

const reveal = ()=>{

revealElements.forEach(el=>{

const top =
el.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(top < windowHeight - 100){

el.classList.add("show");

}

});

};

window.addEventListener(
"scroll",
reveal
);

reveal();



const style =
document.createElement("style");

style.innerHTML = `

.stat-card,
.card,
.department-card,
.ai-card{

opacity:0;

transform:
translateY(30px);

transition:
all .7s ease;

}

.stat-card.show,
.card.show,
.department-card.show,
.ai-card.show{

opacity:1;

transform:
translateY(0);

}

`;

document.head.appendChild(style);



const requestCounter =
document.querySelector(
'.counter[data-target="52436"]'
);

if(requestCounter){

setInterval(()=>{

let current =
parseInt(
requestCounter.innerText
.replace(/,/g,'')
);

current += Math.floor(
Math.random()*5
);

requestCounter.innerText =
current.toLocaleString();

},15000);

}



const deptButtons =
document.querySelectorAll(
".department-card button"
);

deptButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(
"Department Analytics Module Coming Soon"
);

});

});



console.log(
"Smart Governance Command Center Loaded Successfully"
);