export class TodoApiRequest {
    constructor()
    {
        this.url = "https://glo3102lab4.herokuapp.com/";
        this.token = "";
        this.getUserToken();
    }

    getUserToken(){
        self = this;
        fetch(this.url+"users", {
                method: 'post',

            }).then(function(response){
                return response.json();
        }).then(function (data) {
            self.token = data.id;
            console.log(data.id);
        });
    }
    /*showInContainer(id)
    {
        let container = document.getElementById("container");
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
    }*/


}
