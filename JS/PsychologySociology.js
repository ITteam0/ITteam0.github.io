var lectureSciologyMH = document.getElementById('containerSociologyMH');
var tablePsychologyMH = document.getElementById('psychologySociology');
var darkmodePsychologyMH = document.getElementsByClassName('fontArabicMHPsychology');
var lhsPsychologySociologyMH = document.getElementById('lhsPsychologySociologyMH');

function LectureMH(){
    tablePsychologyMH.style.display = "none";
    lectureSciologyMH.style.display = "block";
    lhsPsychologySociologyMH.style.display = "block";
}

function TableMH(){
    lectureSciologyMH.style.display = "none";
    tablePsychologyMH.style.display = "table";
    lhsPsychologySociologyMH.style.display = "flex";
}

function darkmodeMH()
{
    darkmodePsychologyMH[0].setAttribute("id","darkmodePsychologySociologyMH");
}

function lightmodeMH()
{
    darkmodePsychologyMH[0].removeAttribute("id");
}

secondFormStat2MH.addEventListener('submit', submitForm);
