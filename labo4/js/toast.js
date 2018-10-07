export class Toast {
    constructor(name, message, etype)
    {
        this.name = name;
        this.message = message;
        this.etype = etype;
    }

    showInContainer(id)
    {
        console.log("test");
        let container = document.getElementById("container-alert");
        container.innerHTML = container.innerHTML + "<div id='" + id +"' class='toast " +this.etype+"'>" +
            "<p class='titre'>" + this.name +"</p>" +
            "<p class='message'>" +this.message + "</p> " +
            "</div>";
        this.deletein(id);
    }

    deletein(id){
        setTimeout(function () {
            document.getElementById(id).outerHTML = "";
        }, 3000);
    }
}