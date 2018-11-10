export class ApiRequest {
    constructor()
    {
        this.url = "http://api.openweathermap.org/";
        this.token = "f90ec472a8dcc0ebf6dc0e9b8a326243";
        this.city = ""
    }

    getCity(lat, lon){
        let url = this.url+"data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID="+this.token;
        console.log(url)
        fetch(url , {
            method: 'GET',
        }).then(function(response){
            return response.json();
        }).then(function (data) {
            console.log(JSON.stringify(data));
        });
    }
    getByCity(callback)
    {
        let url = this.url+"data/2.5/forecast?q="+this.city + "&APPID="+this.token;
        console.log(url)
        fetch(url , {
            method: 'GET',
        }).then(function(response){
            return response.json();
        }).then(function (data) {
            callback(JSON.stringify(data));
        });
    }


   /* CreateTask(callback, name){
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
        });
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
    }*/
}
