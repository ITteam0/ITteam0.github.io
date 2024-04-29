var dateMonthMH = document.getElementById("month");
var dateYearMH = document.getElementById("year");
var randomMH = document.getElementById("randomMH");
var stat2submitMH = document.getElementById("submitstat2MH");
var secondFormStat2MH = document.getElementById('secondFormStat2MH');
var cardNoMH;
var cvvMH;

function printMonthYearMH() {
    for(let i = 1 ; i <= 12 ; i++)
    {
        var month = document.createElement("option");
        month.textContent = i;
        dateMonthMH.appendChild(month);
    }

    for(let j = 2025 ; j <= 2034 ; j++)
    {
        var year = document.createElement("option");
        year.textContent = j;
        dateYearMH.appendChild(year);
    }
}

function validateCardNocvvMH(){
    cardNoMH = document.getElementById("cardNoMH");
    cvvMH = document.getElementById("cvvMH");

    if((cardNoMH.value >= 10**14 && cardNoMH.value <= 10**19) && (cvvMH.value >= 10**2 && cvvMH.value <= 10**4))
    {
        stat2submitMH.disabled = false;
        stat2submitMH.style.opacity = (1);
        return 1;
    }
    else{
        stat2submitMH.disabled = true;
        stat2submitMH.style.opacity = (0.4);
        return 0;
    }
}

function randomNumMH() {
    if(validateCardNocvvMH())
    {
        var showNumMH = document.createElement("h1");
        showNumMH.textContent = "Code: " + Math.floor(100000000000000 + Math.random() * 900000000000000);
        randomMH.appendChild(showNumMH);
        stat2submitMH.disabled = true;
        stat2submitMH.style.opacity = (0.4);
    }
}

function submitForm(event) {
   event.preventDefault();
}
secondFormStat2MH.addEventListener('submit', submitForm);