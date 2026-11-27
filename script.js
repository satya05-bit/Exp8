if(localStorage.getItem("loggedIn")!=="true"){
    window.location="login.html";
}
// Navigation

function showPage(id){

    document
    .querySelectorAll(".page")
    .forEach(page=>page.classList.remove("active"));

    document
    .getElementById(id)
    .classList.add("active");
}

// Live Time

setInterval(()=>{
    document.getElementById("datetime")
    .innerText=
    new Date().toLocaleString();
},1000);

// News Ticker

const notices=[
"Admission Open for MCA 2027",
"AI Workshop on 25 November",
"Semester Examination from 17 December",
"Hackathon Registration Open",
"Campus Drive by TCS Next Week"
];

let newsIndex=0;

setInterval(()=>{
    document.getElementById("news")
    .innerText=notices[newsIndex];

    newsIndex=(newsIndex+1)%notices.length;
},2000);

// Counters

function animate(id,end){

    let count=0;

    let interval=setInterval(()=>{

        count++;

        document.getElementById(id)
        .innerText=count;

        if(count>=end)
            clearInterval(interval);

    },20);
}

animate("students",250);
animate("facultyCount",15);
animate("placementsCount",95);
animate("projectsCount",120);

// Faculty Data

const faculty=[

{
name:"Dr. S. Mohapatra",
subject:"Web Technology"
},

{
name:"Dr. D. Gountia",
subject:"Computer Organization and Architecture"
},

{
name:"Prof. S.L. Pati",
subject:"Introduction to computational Techniques"
},

{
name:"Prof. R. Sahoo",
subject:"Java Programming"
},

{
name:"Prof. N. Das",
subject:"Artificial Intelligence"
},

{
name:"Prof. K. Nayak",
subject:"Cloud Computing"
}

];

function loadFaculty(){

let html="";

faculty.forEach(f=>{

html+=`
<div class="card faculty-card">
<h3>${f.name}</h3>
<p>${f.subject}</p>
</div>
`;

});

document.getElementById("facultyList").innerHTML=html;

}

loadFaculty();

// Faculty Search

function searchFaculty(){

let value=
document.getElementById("searchBox")
.value.toLowerCase();

let cards=
document.querySelectorAll(".faculty-card");

cards.forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

}

// Courses

const courses=[
"Java Programming",
"Web Technology",
"Cloud Computing",
"Machine Learning",
"Artificial Intelligence",
"Data Mining",
"Cyber Security",
"Software Engineering",
"Computer Networks",
"Mobile App Development"
];

document.getElementById("courseList")
.innerHTML=

courses.map(course=>`

<div class="card"
onclick="alert('Course : ${course}')">

<h3>${course}</h3>

<p>Click for Details</p>

</div>

`).join("");

// Slider

const images=[

"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000",

"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000",

"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"

];

let img=0;

setInterval(()=>{

img=(img+1)%images.length;

document.getElementById("slider").src=images[img];

},3000);

function logout(){

    localStorage.removeItem("loggedIn");

    window.location="login.html";
}