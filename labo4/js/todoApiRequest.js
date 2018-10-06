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
            self.token = data.id
        });
    }

    CreateTask(callback, name){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let Init = { method: 'POST',
            headers : headers,
            mode : 'cors',
            body : JSON.stringify({name: name})
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
}
