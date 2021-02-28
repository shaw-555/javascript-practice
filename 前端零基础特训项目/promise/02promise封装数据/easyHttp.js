class easyHttp {
    async get(url){
        return new Promise((resovle,reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch((error) => console.log(error));
        })
    }
    async post(url,data){
        return new Promise((resovle,reject) => {
            fetch(url,{
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then( data => console.log('success data: '+data))
            .catch((error) => console.log(error));
                
        })
    }
}