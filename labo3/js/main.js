import { Toast } from './toast.js';

window.onload = function (e)
{
    let ToastId = 0;

    document.getElementById("toastButton").onclick = function(){
       let title = document.getElementsByName("title")[0].value;
       let text = document.getElementsByName("text")[0].value;

       let toast = new Toast(title, text);
       ToastId++;
    }

}