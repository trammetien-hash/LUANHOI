let locked = false;

let soHoSo = Number(sessionStorage.getItem("soHoSo")) || 1;

let pool = JSON.parse(sessionStorage.getItem("pool")) || [...hoso];

if(!sessionStorage.getItem("pool")){

    shuffle(pool);

    sessionStorage.setItem("pool", JSON.stringify(pool));

}

let index = Number(sessionStorage.getItem("index")) || 0;

const options = document.querySelectorAll(".option");

const transition = document.getElementById("transition");

const transitionText = document.getElementById("transition-text");

let selected = 0;

// =====================

loadProfile();

updateChoice();

// =====================

function loadProfile(){

    if(index >= pool.length){

        shuffle(pool);

        index = 0;

        sessionStorage.setItem("index",0);
        sessionStorage.setItem("pool",JSON.stringify(pool));

    }

    const profile = pool[index];

    if(!profile){

        console.error("Không tìm thấy hồ sơ", index, pool);

        return;
  
    }

    document.getElementById("case-id").textContent =
    "HỒ SƠ " + String(soHoSo).padStart(4,"0");

    document.getElementById("name").textContent = profile.name;

    document.getElementById("age").textContent = profile.age;

    document.getElementById("gender").textContent = profile.gender;

    document.getElementById("job").textContent = profile.job;

    document.getElementById("death-time").textContent = profile.deathTime;

    document.getElementById("lifespan").textContent = profile.lifespan;

    document.getElementById("cause").textContent = profile.cause;

    document.getElementById("story").textContent = profile.story;

}

// =====================

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

// =====================

const names = [

    "18 tầng địa ngục",

    "Luân hồi",

    "Dương gian"

];

options.forEach((button,i)=>{

    button.dataset.name = names[i];

    button.textContent = names[i];

});

function updateChoice(){

    options.forEach((button,i)=>{

        if(i===selected){

            button.classList.add("selected");

            button.textContent="> "+button.dataset.name;

        }else{

            button.classList.remove("selected");

            button.textContent=button.dataset.name;

        }

    });

}

// =====================

options.forEach((button,i)=>{

    button.addEventListener("click",()=>{

        if(selected!==i){

            selected=i;

            updateChoice();

            return;

        }

        switch(i){

            case 0:
                hell();
                break;

            case 1:
                reincarnation();
                break;

            case 2:
                returnWorld();
                break;

        }

    });

});

// =====================

function nextProfile(){

    if(locked) return;

    locked = true;

    transition.classList.add("show");

    transitionText.textContent="";

    const text="PHÁN QUYẾT ĐÃ ĐƯỢC THI HÀNH.";

    setTimeout(()=>{

        let i=0;

        const typing=setInterval(()=>{

            transitionText.textContent+=text[i];

            i++;

            if(i>=text.length){

                clearInterval(typing);

                setTimeout(()=>{

soHoSo++;
index++;

sessionStorage.setItem("soHoSo", soHoSo);
sessionStorage.setItem("index", index);
sessionStorage.setItem("pool", JSON.stringify(pool));

loadProfile();

                    selected=0;

                    updateChoice();

                    transition.classList.remove("show");

                    locked = false;

                    transitionText.textContent="";

                },1000);

            }

        },45);

    },600);

}

// =====================

function returnWorld(){

    if(locked) return;

    locked = true;

    sessionStorage.setItem("soHoSo", soHoSo);
    sessionStorage.setItem("index", index);
    sessionStorage.setItem("pool", JSON.stringify(pool));

    location.href = "living.html";

}