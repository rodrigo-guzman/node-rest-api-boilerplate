const fetch = require('node-fetch');

//consumo servicio
class httpService{
    async requestService(req,res) 
    {   
        const URI  = req 
    
        let response = await fetch(URI)
        let json = await response.json();
    
    
        if(response.status!==200)
            {
                console.log('Se produjo un error en el consumo del servicio')
            }
        else
            {
                return json   
            }
    };
    
}

module.exports = httpService;