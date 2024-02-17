const f1log = [
    {logo: "image/fia_logo.webp", url: "#"},
]
var A1 = "";
for(let i in f1log){
    A1 +=`<a href="${f1log[i].url}"><img src="${f1log[i].logo}" alt=""></a>`
}
document.querySelector(".logo").innerHTML=A1;
const navbar = [
    {url: "#", title: "F1®"},
    {url: "#", title: "<span>F2™</span> <img src=\"image/f2_logo.avif\" alt=\"formula 2\">"},
    {url: "#", title: "<span>F3™</span> <img src=\"image/f3_logo.avif\" alt=\"formula 3\"> "},
    {url: "#", title: "<span>F1® ACADEMY</span> <img src=\"image/f1academy.svg\" alt=\"formula1 acadamy\"> "}
];
var A2 ="";
navbar.forEach(element => {
    A2 += `<li class="nav_item" id="side-items"><a href="${element.url}">${element.title}</a></li>`
    document.querySelector(".navbar").innerHTML = A2;
});
const navbar2 =[
    {url: "#", title: "ATHENTICS <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", title: "STORE <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", title: "TICKETS <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", title: "HOSPITALITY <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", title: "EXPERIENCES <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"}
];
var A3 = "";
navbar2.forEach(element => {
    A3 += `<li class="nav_item2" id="side-items"><a href="${element.url}">${element.title}</a></li>`
    document.getElementsByClassName("navbar2")[0].innerHTML = A3;
});
const f1_navbar =[
    {url: "#", class: "latest", title: "Latest <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "video", title: "Video <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "f1-unlocked", title: "F1 Unlocked <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "schedule", title: "Schedule <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "results", title: "Results <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>" },
    {url: "#", class: "drivers", title: "Drivers <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "teams", title: "Teams <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "gaming", title: "Gaming <i class=\"fa-solid fa-angle-down\"></i> <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"},
    {url: "#", class: "live-timing", title: "Live Timing <i class=\"fa-solid fa-angle-right\" id=\"i\"></i>"}
];
var A4 = "";
f1_navbar.forEach(element =>{
    A4 += ` <li class="f1-link ps-xxl-3 pe-xxl-3 ${element.class}" id="side-items"><a href="${element.url}">${element.title}</a></li>`
    document.getElementsByClassName("f1-navbar")[0].innerHTML = A4;  
});

document.querySelector("#f1-bar").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("open");
    const isOpen = document.querySelector(".sidebar").classList.contains("open");
    document.querySelector("#f1-bar i").classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars';
    document.querySelector(".side-bar3").innerHTML = A2;
    document.querySelector(".side-bar2").innerHTML = A3;
    document.querySelector('.side-bar').innerHTML = A4;
});

const f1_home_page = [
    {url: "#", img: "image/image1.avif", category: "FEATURE", title: "How Lewis Hamilton’s sensational move from Mercedes to Ferrari played out"},
    {url: "#", img: "image/charles-leclerc.jpg", category: "FEATURE", title: "Why a less rigid deal for Leclerc and Ferrari makes sense for both sides"},
    {url: "#", img: "image/image3.avif", category: "NEWS", title: "Verstappen singles out 'crazy' race in 2023 that ‘could have gone so wrong’"},
    {url: "#", img: "image/skysports-formula-one-williams_6445364.jpg", category: "NEWS", title: "AS IT HAPPENED – All the latest as Williams reveal their 2024 livery in NYC"},
    {url: "#", img: "image/image4.avif", category: "FEATURE", title: "McLaren fire up new F1 car for the first time ahead of Silverstone shakedown"},
    {url: "#", img: "image/image5.avif", category: "NEWS", title: "FIRST LOOK: Haas showcase new look for 2024 challenger as livery is revealed"},
]
var A5 = "";
f1_home_page.forEach(element => {
    A5 +=`
    <div class="col-6 mb-3">
        <a href="${element.url}">
            <div class="card border-0">
                <div class="container-fluid overflow-hidden m-0 p-0">
                    <img src="${element.img}" class="card-img-top rounded-0" alt="...">
                </div>
                <div class="card-body mt-3 pt-0">
                    <p class="card-text fw-bold">${element.category}</p>
                    <p class="card-title">${element.title}</p>
                </div>
            </div>
        </a>
    </div>
    `
    document.querySelector(".right-col .row").innerHTML = A5; 
});
document.querySelector(".latest").addEventListener("mouseover",()=>{
    let topics = [
        {url: "#", img: "background-image: url(image/bg1.avif);", title: "F1 Unlocked"},
        {url: "#", img: "background-image: url(image/bg2.jpg);" , title: "Las Vegas"},
        {url: "#", img: "background-image: url(image/bg3.avif);", title: "Sustainablity"},
        {url: "#", img: "background-image: url(image/bg4.avif);", title: "Beginner's Guide"},
        {url: "#", img: "background-image: url(image/bg5.avif);", title: "F1 Acadamy"},
        {url: "#", img: "background-image: url(image/bg6.avif);", title: "Driver Market"}
    ];
    let A6 = "";
    topics.forEach(element =>{
        A6 += `<a href="${element.url}" class="topics" style="${element.img}"><h4>${element.title}</h4></a>`
    });
    let A7 = "";
    for(let i = 0 ; i <= 2 ; i++){
        A7 += `
            <a class="d-flex border-bottom"  href="${f1_home_page[i].url}">
                <img class="me-3 pt-2 rounded-2" src="${f1_home_page[i].img}" alt="" width="150px" height="70px">
                <p class="text-white lh-1"><span style="font-size: 10px;">${f1_home_page[i].category}</span><br>${f1_home_page[i].title}</p>
            </a>`
    };
    document.querySelector(".tp").innerHTML = A6;
    document.querySelector(".lst").innerHTML = A7;
    document.querySelector(".dropDownManu").style.display= "block"; 
});
document.querySelector(".latest").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu").style.display= "none";
});
document.querySelector(".dropDownManu").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu").style.display= "block";
});
document.querySelector(".dropDownManu").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu").style.display= "none";
});
document.querySelector(".schedule").addEventListener("mouseover",()=>{
    let topics = [
        {url: "#", img: "image/Bahrain_Grand_Prix.avif", title: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024", date: "February 29-March 02"},
        {url: "#", img: "image/Saudi_Arabian_Grand_Prix.avif", title: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024", date: "March 07-09"},
        {url: "#", img: "image/Australian_Grand_Prix.avif", title: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 24", date: "March 22-24"},
        {url: "#", img: "image/Japanese_Grand_Prix.avif", title: "FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024", date: "Apill 05-07"}
    ]
    let A6 = "";
    let A7 = "";
    for(let i = 1; i<4; i++){
        A6 +=`
    <div class="sd col-4 mt-1"><a href="${topics[i].url}">
        <div class="container-fluid overflow-hidden rounded-top-3 m-0 p-0"><img src="${topics[i].img}" class="card-img-top" alt="..."></div>
        <div class="card border-0 rounded-0" style="background-color: #1f1f27;">
            <div class="mt-2 ps-0 border border-top-0 border-start-0 rounded-4 rounded-top-0 rounded-start-0">
                <p style="color: gainsboro;">${topics[i].title}</p>
                <p class="text-white">${topics[i].date}<i class="fa-solid fa-angle-right" style="margin-left: 35%; font-size:small;"></i></p>
          </div>
      </div>
    </a></div>`
    }
    for(let i = 0; i<1; i++){
        A7 +=`
    <div class="bg-img pe-3 pt-3 mt-1"><a href="${topics[i].url}">
        <div class="container-fluid overflow-hidden rounded-top-3 m-0 p-0"><img src="${topics[i].img}" class="card-img-top" alt="..."></div>
        <div class="card border-0 rounded-0" style="background-color: #1f1f27;">
            <div class="ps-0 mt-2 border border-top-0 border-start-0 rounded-4 rounded-top-0 rounded-start-0">
                <p style="color: gainsboro;">${topics[i].title}</p>
                <p class="text-white">${topics[i].date}<i class="fa-solid fa-angle-right" style="margin-left: 35%; font-size:small;"></i></p>
          </div>
      </div>
    </a></div>`
    }
    document.querySelector(".scd").innerHTML = A6;
    document.querySelector(".scd0").innerHTML = A7;
    document.querySelector(".dropDownManu1").style.display = "block";
});
document.querySelector(".schedule").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu1").style.display= "none";
});
document.querySelector(".dropDownManu1").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu1").style.display= "block";
});
document.querySelector(".dropDownManu1").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu1").style.display= "none";
});

document.querySelector(".results").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu2").style.display = "block";
});
document.querySelector(".results").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu2").style.display= "none";
});
document.querySelector(".dropDownManu2").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu2").style.display= "block";
});
document.querySelector(".dropDownManu2").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu2").style.display= "none";
});

document.querySelector(".drivers").addEventListener("mouseover",()=>{
    let topics = [
        {url: "#", color: "#37BEDD", title: "Alexander <span style='font-weight: bold; font-size: 15px;'>ALBON</span>"},
        {url: "#", color: "#358C75", title: "Fernando <span style='font-weight: bold; font-size: 15px;'>ALONSO</span>"},
        {url: "#", color: "#00E700", title: "Valtteri <span style='font-weight: bold; font-size: 15px;'>BOTTAS</span>"},
        {url: "#", color: "#2293D1", title: "Pierre <span style='font-weight: bold; font-size: 15px;'>GASLY</span>"},
        {url: "#", color: "#6BD3BE", title: "Lewis <span style='font-weight: bold; font-size: 15px;'>HAMILTON</span>"},
        {url: "#", color: "#B6BABD", title: "Nico <span style='font-weight: bold; font-size: 15px;'>HULKENBERG</span>"},
        {url: "#", color: "#F91436", title: "Charles <span style='font-weight: bold; font-size: 15px;'>LECLERC</span>"},
        {url: "#", color: "#B6BABD", title: "Kevin <span style='font-weight: bold; font-size: 15px;'>MAGNUSSEN</span>"},
        {url: "#", color: "#F58021", title: "Lando <span style='font-weight: bold; font-size: 15px;'>NORRIS</span>"},
        {url: "#", color: "#2293D1", title: "Esteban <span style='font-weight: bold; font-size: 15px;'>OCON</span>"},
        {url: "#", color: "#3671C6", title: "Sergio <span style='font-weight: bold; font-size: 15px;'>PEREZ</span>"},
        {url: "#", color: "#F58021", title: "Oscar <span style='font-weight: bold; font-size: 15px;'>PIASTRI</span>"},
        {url: "#", color: "#5E8FAA", title: "Daniel <span style='font-weight: bold; font-size: 15px;'>RICCIARDO</span>"},
        {url: "#", color: "#6BD3BE", title: "George <span style='font-weight: bold; font-size: 15px;'>RUSSELL</span>"},
        {url: "#", color: "#F91436", title: "Carlos <span style='font-weight: bold; font-size: 15px;'>SAINZ</span>"},
        {url: "#", color: "#37BEDD", title: "Logan <span style='font-weight: bold; font-size: 15px;'>SARGEANT</span>"},
        {url: "#", color: "#358C75", title: "Lance <span style='font-weight: bold; font-size: 15px;'>STROLL</span>"},
        {url: "#", color: "#5E8FAA", title: "Yuki <span style='font-weight: bold; font-size: 15px;'>TSUNODA</span>"},
        {url: "#", color: "#3671C6", title: "Max <span style='font-weight: bold; font-size: 15px;'>VERSTAPPEN</span>"},
        {url: "#", color: "#00E700", title: "<span style='font-weight: bold; font-size: 15px;'>GUANYU</span> ZHOU"},
    ];
    let A6 = "";
    topics.forEach(element =>{
        A6 += `<li><a href="${element.url}" class="text-white"><div class="driverscolor" style="background-color: ${element.color};"></div>${element.title} <i class="fa-solid fa-angle-right"></i></a></li>`
    });
    document.querySelector(".f1driver ul").innerHTML = A6;
    document.querySelector(".drivers").addEventListener("mouseover",()=>{
        document.querySelector(".dropDownManu3").style.display="block";
    });
});
document.querySelector(".drivers").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu3").style.display = "none";
});
document.querySelector(".dropDownManu3").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu3").style.display = "block";
});
document.querySelector(".dropDownManu3").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu3").style.display = "none";
});


document.querySelector(".drivers").addEventListener("mouseover",()=>{
    let topics = [
        {url: "#", color: "#2293D1", title: "Alpine"      ,image:"Alpine.avif"},
        {url: "#", color: "#358C75", title: "Aston Martin",image:"Aston Martin.avif"},
        {url: "#", color: "#F91436", title: "Ferrari"     ,image:"Ferrari.avif"},
        {url: "#", color: "#B6BABD", title: "Haas"        ,image:"Haas.avif"},
        {url: "#", color: "#00E700", title: "Kick Sauber" ,image:"Kick Sauber.avif"},
        {url: "#", color: "#F58021", title: "McLaren"     ,image:"McLeren.avif"},
        {url: "#", color: "#6BD3BE", title: "Mercedes"    ,image:"Mercedes.avif"},
        {url: "#", color: "#5E8FAA", title: "RB"          ,image:"RB.avif"},
        {url: "#", color: "#3671C6", title: "Red Bull"    ,image:"Red Bull.avif"},
        {url: "#", color: "#37BEDD", title: "Williams"     ,image:"Williams.avif"}
    ];
    let A6 = "";
    topics.forEach(element =>{
        A6 += `<li><a href="${element.url}" class="text-white fw-bold"><div class="teamscolor" style="background-color: ${element.color}"></div>${element.title}<i class="fa-solid fa-angle-right"></i><img src="image/${element.image}" alt=""></a></li>`
    });
    document.querySelector(".f1teams ul").innerHTML = A6;
    document.querySelector(".teams").addEventListener("mouseover",()=>{
        document.querySelector(".dropDownManu4").style.display="block";
    });
});
document.querySelector(".teams").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu4").style.display = "none";
});
document.querySelector(".dropDownManu4").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu4").style.display = "block";
});
document.querySelector(".dropDownManu4").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu4").style.display = "none";
});


document.querySelector(".gaming").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu5").style.display = "block";
});
document.querySelector(".gaming").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu5").style.display= "none";
});
document.querySelector(".dropDownManu5").addEventListener("mouseover",()=>{
    document.querySelector(".dropDownManu5").style.display= "block";
});
document.querySelector(".dropDownManu5").addEventListener("mouseout",()=>{
    document.querySelector(".dropDownManu5").style.display= "none";
});

const more_news = [
    {url: "#", img: "image/mercedes cars.avif", category: "TECHNICAL", title: "TECH ANALYSIS: The major changes Mercedes have made with thire W15 in a bid to catch Red Bull."},
    {url: "#", img: "image/McLeren car.avif", category: "TECHNICAL", title: "TECH ANALYSIS: How McLeren have taken their impressive 2023 updates to another level on the MCL38."},
    {url: "#", img: "", category: "NEWS", title:    "' I think it will look cool ' - Verstappen offers his take on Hamilton's blockbuster Ferrari switch."},
    {url: "#", img: "", category: "FEATURE", title: "'Perez's goal is to make it work at Red Bull-but There are planty of seats available on the grid ..."},
]
var A8 = "";
more_news.forEach(element => {
    A8 +=`
    <li class="mb-3">
        <a href="${element.url}">
            <div class="card border-0">
                <div class="container-fluid overflow-hidden m-0 p-0">
                    <img src="${element.img}" class="card-img-top rounded-0" alt="...">
                </div>
                <div class="card-body mt-3 pt-0">
                    <p class="card-text fw-bold">${element.category}</p>
                    <p class="card-title">${element.title}</p>
                </div>
            </div>
        </a>
    </li>
    `
    document.querySelector(".more-news").innerHTML = A8; 
});