import { Toast } from './toast.js';

window.onload = function (e)
{
    let ToastId = 0;

    document.getElementById("toastButton").onclick = function(){
        let title = document.getElementsByName("title")[0].value;
        let text = document.getElementsByName("text")[0].value;
        let type = document.getElementsByName("type");
        for (var i = 0, length = type.length; i < length; i++)
        {
            if (type[i].checked)
            {
                type = type[i].value;
                break;
            }
        }
        let toast = new Toast(title, text, type);
        toast.showInContainer(ToastId);
        console.log(toast);
        ToastId++;
    }

}