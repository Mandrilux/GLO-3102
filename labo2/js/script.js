window.onkeydown = function (e) {

    var research = document.getElementById('research');
    if (document.activeElement !== research)
    {
        if (e.key === 'x')
        {
            research.value='';
        }
    }
}

window.onkeyup = function (e) {
    var research = document.getElementById('research');
    printDatas(research.value);
}

function printDatas(value)
{
    let block = document.getElementById("data");
    let p = block.getElementsByTagName("p");

    if (value === "") {
        showAllDatas(p);
        return;
    }
    if (!showSearchDatas(p, value)) {
        var error = document.getElementById("error");
        console.log(error);
        var pinerror = error.getElementsByTagName("p");
        // pinerror.style.display = "block";
    }
}

function showAllDatas(p){
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
            // console.log("on compare " + "[" + tmp + "]"+ " avec " + "[" + value.toLowerCase() + "]");
            if (tmp === value.toLowerCase()) {
                console.log(p[i].innerHTML);
                p[i].style.display = "block";
                isOK = true;
            }
            else {p[i].style.display = "none";}
        }
        else {p[i].style.display = "none";}
    }
    return isOK;
}
