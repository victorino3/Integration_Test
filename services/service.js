const https = require("https")

//let url = `https:/.dev/api/people/9/`
let url = `https:/.dev/api/starships/9/`

class Service {
    static async marvelApi(url){
        return new Promise((resolve,reject)=>{
            https.get(url,response =>{
                response.on("data", data => resolve(JSON.parse(data)))
                response.on("error",reject)
            })
        })
    }
    static async getBiggsContent(url){
        const data = await Service.marvelApi(url)
        return {
            name:data.name,
            height:data.height,
            mass:data.mass,
            hair_color:data.hair_color,
            skin_color:data.skin_color,
            eye_color:data.eye_color,
            birth_year:data.birth_year,
        }
    }
    static async getStartContent(url){
        const data =await Service.marvelApi(url)
        return {
            name:data.name,
            model:data.model,
            manufacturer:data.manufacturer,
            cost_in_credits:data.cost_in_credits,
            length:data.length,
            crew:data.crew,
            passengers:data.passengers,
        }
    }
}


module.exports=Service

