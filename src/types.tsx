 export interface IPokemonData{
    name:string
    url: string
    height:number
    id: number
    weight: number
    sprites: {
      front_default: string
    }
    types: [{
       type:{
         name:string
      }
    }]
    abilities: [
      {
         ability: {
            name:string
         }
      }
    ]
    stats: [
      {
         base_stat: number
         stat: {
            name:string
         }
      }
    ]
 }