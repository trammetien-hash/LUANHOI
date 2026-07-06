let sentence = [];

const result = document.getElementById("selected-result");
const options = document.querySelectorAll(".option");
const infos = document.querySelectorAll(".floor-info");

const floors = [

{
title:"Tầng 1 - Bạt Thiệt",
description:"Dành cho những kẻ nói dối, vu khống, bịa đặt, tung tin thất thiệt hoặc dùng lời nói để hãm hại người khác."
},

{
title:"Tầng 2 - Tiễn Đao",
description:"Dành cho những kẻ lừa gạt, phản bội lòng tin, lừa đảo vì lợi ích cá nhân."
},

{
title:"Tầng 3 - Thiết Thụ",
description:"Dành cho những kẻ bạo hành gia đình, ngược đãi trẻ em, người già hoặc những người không có khả năng tự vệ."
},

{
title:"Tầng 4 - Nghiệt Kính",
description:"Dành cho những kẻ giả tạo, vu oan, che giấu tội lỗi hoặc đổ tội cho người vô tội."
},

{
title:"Tầng 5 - Chưng Lung",
description:"Dành cho những kẻ tham ô, bóc lột, lợi dụng quyền lực khiến người khác phải chịu đau khổ."
},

{
title:"Tầng 6 - Đồng Trụ",
description:"Dành cho những kẻ cố ý phóng hỏa, phá hoại tài sản hoặc khiến nhiều người mất nơi cư trú."
},

{
title:"Tầng 7 - Đao Sơn",
description:"Dành cho những kẻ giết người, cố ý gây thương tích nghiêm trọng hoặc thường xuyên dùng bạo lực với người khác."
},

{
title:"Tầng 8 - Băng Sơn",
description:"Dành cho những kẻ vô ơn, bất hiếu, phản bội người thân hoặc bỏ mặc người khác trong lúc nguy nan."
},

{
title:"Tầng 9 - Du Oa",
description:"Dành cho những kẻ buôn người, cưỡng ép, giam cầm hoặc tước đoạt tự do của người khác."
},

{
title:"Tầng 10 - Ngưu Khanh",
description:"Dành cho những kẻ ngược đãi động vật, giết hại sinh vật vô cớ hoặc hành hạ chúng để mua vui."
},

{
title:"Tầng 11 - Thạch Áp",
description:"Dành cho những kẻ lợi dụng địa vị để áp bức, chèn ép hoặc hủy hoại cuộc sống của người khác."
},

{
title:"Tầng 12 - Cữu Thung",
description:"Dành cho những kẻ trộm cắp, cướp bóc, chiếm đoạt tài sản bằng bạo lực hoặc thủ đoạn."
},

{
title:"Tầng 13 - Huyết Trì",
description:"Dành cho những kẻ tra tấn, sát hại nhiều người hoặc gây ra những cuộc thảm sát."
},

{
title:"Tầng 14 - Uổng Tử",
description:"Dành cho những kẻ khiến người vô tội phải chết oan hoặc ép người khác đến bước đường cùng."
},

{
title:"Tầng 15 - Trách Hình",
description:"Dành cho những kẻ tái phạm nhiều lần, biết rõ tội lỗi nhưng vẫn tiếp tục gây hại."
},

{
title:"Tầng 16 - Hỏa Sơn",
description:"Dành cho những kẻ gây chiến tranh, khủng bố hoặc châm ngòi cho các cuộc xung đột khiến nhiều người thiệt mạng."
},

{
title:"Tầng 17 - Thạch Ma",
description:"Dành cho những kẻ hoàn toàn mất nhân tính, coi thường sinh mạng và niềm đau của người khác."
},

{
title:"Tầng 18 - Vô Gián",
description:"Dành cho những tội ác đặc biệt nghiêm trọng, không hối cải và gây hậu quả khôn lường. Đây là tầng địa ngục nặng nhất."
}

];

let selected = 0;

function update(){

    options.forEach((option,index)=>{

        option.classList.toggle("selected",index===selected);

        if(sentence.includes(index)){

            option.querySelector(".arrow").textContent="✓";

        }else{

            option.querySelector(".arrow").textContent=index===selected?">":"";

        }

        infos[index].textContent="";

    });

    infos[selected].textContent=floors[selected].description;

}

function renderSentence(){

    if(sentence.length===0){

        result.innerHTML="(Chưa có)";

        return;

    }

    let html="";

    sentence.forEach((i,n)=>{

        html += `
        <div class="judgement-item" data-floor="${i}">
            <span>${n+1}. ${floors[i].title}</span>
            <span class="remove">✕</span>
        </div>
        `;

    });

    html += `<br><b>Tổng hình phạt: ${sentence.length} tầng</b>`;

    result.innerHTML = html;

    document.querySelectorAll(".remove").forEach(btn=>{

        btn.onclick = (e)=>{

            e.stopPropagation();

            const floor = Number(btn.parentElement.dataset.floor);

            sentence = sentence.filter(i=>i!==floor);

            renderSentence();

            update();

        };

    });

}

options.forEach((option,index)=>{

    option.onclick=()=>{

        selected=index;

        update();

        option.scrollIntoView({

            behavior:"smooth",

            block:"nearest"

        });

    };

});

const menu = document.querySelectorAll(".confirm-option");

let selectedMenu = 0;

function updateMenu(){

    menu.forEach((item,index)=>{

        item.querySelector(".arrow").textContent =
        index===selectedMenu ? ">" : "";

    });

}

menu.forEach((item,index)=>{

    item.onclick=()=>{

        if(selectedMenu!==index){

            selectedMenu=index;

            updateMenu();

            return;

        }

switch(index){

    case 0: // THÊM

        if(!sentence.includes(selected)){

            sentence.push(selected);

            renderSentence();

            update();

        }

        break;

    case 1: // XÁC NHẬN

        if(sentence.length===0){

            showNotice("CHƯA CÓ HÌNH PHẠT.");

setTimeout(()=>{

    hideNotice();

},1500);

            return;

        }

        introHell();

        break;

    case 2: // QUAY LẠI

        history.back();

        break;

        }

    };

});

updateMenu();

renderSentence();

function showNotice(text){

    const notice = document.getElementById("notice");
    const noticeText = document.getElementById("notice-text");

    noticeText.textContent = text;

    notice.classList.add("show");

}

function hideNotice(){

    document.getElementById("notice").classList.remove("show");

}

function introHell(){

    showNotice("PHÁN QUYẾT ĐÃ ĐƯỢC THI HÀNH.");

    setTimeout(()=>{

        let soHoSo = Number(sessionStorage.getItem("soHoSo")) || 1;
        let index = Number(sessionStorage.getItem("index")) || 0;

        soHoSo++;
        index++;

        sessionStorage.setItem("soHoSo", soHoSo);
        sessionStorage.setItem("index", index);

        hideNotice();

        location.href = "judgement.html";

    },2000);

}

update();
updateMenu();
renderSentence();