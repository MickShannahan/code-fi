import { ProxyState } from "../AppState.js"
import { Vibe } from "../Models/Vibe.js"
import { api } from "./AxiosService.js"



class VibesService{
  
  async getVibes(){
    const res = await api.get('api/vibes')
    console.log('get vibes', res.data)
    ProxyState.vibes = res.data
  }
  
  async getActiveVibe(id) {
    const res = await api.get('api/vibes/'+ id)
    console.log('active vibe', res.data)
    ProxyState.activeVibe = new Vibe(res.data)
  }


}

export const vibesService = new VibesService()