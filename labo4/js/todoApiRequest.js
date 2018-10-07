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
        fetch(this.url+this.token+"/tasks", Init).then(function (response) {
            return response.json();
        }).then(function (data){
            callback(JSON.stringify(data));
        });
    }

    DeleteTask(idTask) {
        self = this;
        fetch(this.url+this.token+"/tasks/"+idTask, {
            method: 'delete',
        });

        /*    .then(function(response){
            return response.json();
        }).then(function (data) {
        });*/
    }

    UpdateTask(idTask, name){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let Init = { method: 'PUT',
            headers : headers,
            mode : 'cors',
            body : JSON.stringify({name: name})
        };
        fetch(this.url+this.token+"/tasks/"+idTask, Init).then(function (response) {
            return response.json();
        });/*.then(function (data){
            callback(JSON.stringify(data));
        });*/
    }

    GetTask(callback){
        self = this;
        fetch(this.url+this.token+"/tasks", {
            method: 'GET',
        }).then(function(response){
            return response.json();
        }).then(function (data) {
            callback(JSON.stringify(data));
        });
    }
}
