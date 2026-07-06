const role = document.querySelector(".role.active");

const popup = document.getElementById("popup");

const yes = document.getElementById("yes");

const no = document.getElementById("no");

let selected = "yes";

role.onclick = () => {

    popup.classList.remove("hidden");

    selected = "yes";

    yes.textContent = "> Có";

    no.textContent = "Không";

};

yes.onclick = () => {

    if(selected !== "yes"){

        selected = "yes";

        yes.textContent = "> Có";

        no.textContent = "Không";

        return;

    }

    yes.textContent = "✓ Có";

    no.style.visibility = "hidden";

    setTimeout(() => {

        location.href = "intro.html";

    },500);

};

no.onclick = () => {

    if(selected !== "no"){

        selected = "no";

        yes.textContent = "Có";

        no.textContent = "> Không";

        return;

    }

    popup.classList.add("hidden");

};