const reasons = document.querySelectorAll(".reason");
const menu = document.querySelectorAll(".confirm-option");

let selectedReason = 0;
let selectedMenu = 0;

const notice = document.getElementById("notice");
const noticeText = document.getElementById("notice-text");

reasons.forEach((reason,index)=>{

    reason.onclick=()=>{

        selectedReason=index;

        reasons.forEach(item=>{

            item.querySelector(".check").textContent="☐";

        });

        reasons[index].querySelector(".check").textContent="☑";

    };

});

function updateMenu(){

    menu.forEach((item,index)=>{

        item.querySelector(".arrow").textContent =
        index===selectedMenu ? ">" : "";

    });

}

function showNotice(text){

    noticeText.textContent = text;

    notice.classList.add("show");

}

function hideNotice(){

    notice.classList.remove("show");

}

function introLiving(){

    showNotice("TRẢ VỀ DƯƠNG GIAN.");

    setTimeout(()=>{

        showNotice("PHÁN QUYẾT ĐÃ ĐƯỢC THI HÀNH.");

        setTimeout(()=>{

        let soHoSo = Number(sessionStorage.getItem("soHoSo")) || 1;
let index = Number(sessionStorage.getItem("index")) || 0;

soHoSo++;
index++;

sessionStorage.setItem("soHoSo", soHoSo);
sessionStorage.setItem("index", index);

// Giữ nguyên thứ tự hồ sơ
const pool = JSON.parse(sessionStorage.getItem("pool"));
if(pool){

    sessionStorage.setItem("pool", JSON.stringify(pool));

}

            hideNotice();

            location.href = "judgement.html";

        },2300);

    },2300);

}

menu.forEach((item,index)=>{

    item.onclick=()=>{

        if(selectedMenu!==index){

            selectedMenu=index;

            updateMenu();

            return;

        }

        if(index===0){

            introLiving();

        }else{

            history.back();

        }

    };

});

updateMenu();
