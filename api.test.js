const {deepStrictEqual} = require("assert")
const service = require("./services/service")
const sinon = require("sinon")

let url = `https://swapi.dev/api/people/9/`
let url_1 = `https://swapi.dev/api/starships/9/`

const mocks = {
    Biggs_Darklighter:require("./mocks/Biggs_Darklighter.json"),
    Death_Star:require("./mocks/Death_Star.json")
}



    ;
(async()=>{
    
    const stub = sinon.stub(service, service.marvelApi.name)
    stub
        .withArgs(url_1 )
        .resolves(mocks.Death_Star)

    stub
        .withArgs(url)
        .resolves(mocks.Biggs_Darklighter)

    {
        const response = service.marvelApi(url_1)
        //console.log("response: ",response)
    }

    {
       const response = await service.getStartContent(url_1)
        const expectedDeath = {
            "name": "Death Star",
            "model": "DS-1 Orbital Battle Station",
            "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
            "cost_in_credits": "1000000000000",
            "length": "120000",
            "crew": "342,953",
            "passengers": "843,342",
        }
       
        deepStrictEqual(response,expectedDeath)
    }
    {
        const response = await service.getBiggsContent(url)
       
        const expectedBiggs = {
            "name": "Biggs Darklighter",
            "height": "183",
            "mass": "84",
            "hair_color": "black",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "24BBY",

        }
        deepStrictEqual(response,expectedBiggs)
    }
    
    
})()