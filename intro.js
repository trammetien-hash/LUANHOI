const text = document.getElementById("text");

const lines = [

    {
        text: "Địa phủ.",
        time: 2200
    },

    {
        text: "Nơi ngươi sẽ đảm nhận\nvai trò Diêm Vương.",
        time: 3200
    },

    {
        text: "Mọi phán quyết\nđều nằm trong tay ngươi.",
        time: 3200
    },

    {
        text: "Số phận của mỗi linh hồn\nđang chờ ngươi định đoạt.",
        time: 3800
    },

    {
        text: "「 SỔ SINH TỬ ĐANG ĐƯỢC MỞ RA... 」",
        time: 3200
    }

];

let i = 0;

function nextLine(){

    if(i >= lines.length){

        window.location.href = "judgement.html";

        return;

    }

    text.style.opacity = 0;

    setTimeout(()=>{

        text.innerHTML = lines[i].text.replace(/\n/g,"<br>");

        text.style.opacity = 1;

        const delay = lines[i].time;

        i++;

        setTimeout(nextLine, delay);

    },500);

}

nextLine();