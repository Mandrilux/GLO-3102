window.onkeydown = function (e) {
    var research = document.getElementById('research');
    if (document.activeElement !== research)
    {
        if (e.key === 'x')
        {
            research.value='';
        }
    }
    unshowDatas();
}

window.onkeyup = function (e) {
    var research = document.getElementById('research');
    printDatas(research.value);
}

//set mouse pour unshow dropdown
document.onmouseup = function (e){
    let dropdown = document.getElementById('research');
    let target = e.target;
    if (target !== dropdown)
        unshowDatas();
};

function printDatas(value)
{
    let block = document.getElementById("data");
    let p = block.getElementsByTagName("p");

    block.style.display = "block";
    if (value === "") {
        showAllDatas(p);
        return;
    }
    if (!showSearchDatas(p, value)) {
        let error = document.getElementById("error");
        error.style.display = "block";
    }
}

function showAllDatas(p){
    removeError();
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "block";
    }
}

function showSearchDatas(p, value){
    let isOK = false;
    let tmp;

    for (i = 0; i < p.length; i++) {
        tmp = p[i].innerHTML;
        tmp = tmp.trim();

        tmp = tmp.substr(0,value.length);

        if (value.length >= 1) {
            tmp = tmp.toLowerCase();
            if (tmp === value.toLowerCase() || p[i].innerHTML.includes(value)) {
                removeError();
                p[i].style.display = "block";
                isOK = true;
            }
            else {p[i].style.display = "none";}
        }
        else {p[i].style.display = "none";}
    }
    return isOK;
}

function removeError() {
    let error = document.getElementById("error");
    error.style.display = "none";
}

function unshowDatas() {
    let block = document.getElementById("data");
    let p = block.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    block.style.display = "none";
    removeError();
}
function changeInput(p) {
    let research = document.getElementById('research');
    research.value = p.getAttribute("data-value");
    unshowDatas();
}

function clearInput()
{
    var research = document.getElementById('research');
    research.value='';
    unshowDatas();
}