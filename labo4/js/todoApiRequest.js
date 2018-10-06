export class TodoApiRequest {
    constructor()
    {
        this.url = "https://glo3102lab4.herokuapp.com/";
        this.token = "a";
        this.getUserToken();
    }

    getUserToken(){
        self = this;
        fetch(this.url+"users", {
                method: 'post',
            }).then(function(response){
                return response.json();
        }).then(function (data) {
            self.token = data.id
        });
    }

    CreateTask(callback){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let Init = { method: 'POST',
            headers : headers,
            mode : 'cors',
            body : JSON.stringify({name: "hi"})
        };
        console.log(this.token);
        fetch(this.url+this.token+"/tasks", Init).then(function (response) {
            return response.json();
        }).then(function (data){
            callback(JSON.stringify(data));
        });
    }

    getTask(){
        self = this;
        fetch(this.url+this.token+"/tasks", {
            method: 'get',
        }).then(function(response){
            return response.json();
        }).then(function (data) {
            console.log(data);
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
