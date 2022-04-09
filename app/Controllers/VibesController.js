import { ProxyState } from "../AppState.js";
import { vibesService } from "../Services/VibesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawVibes(){
  const vibes = ProxyState.vibes
  console.log('drawing vibes',vibes);
  let template = ''
  vibes.forEach(v => template += `
  <div class="col-12 h-25 my-md-3 p-3 list-item" onclick="app.vibesController.getActiveVibe('${v.id}')">${v.name}</div>`)
  document.getElementById('vibes-list').innerHTML = template
}

function _drawActiveVibe(){
  const vibe = ProxyState.activeVibe
  console.log('drawing active vibe', vibe);
  // NOTE set background image of app
  document.getElementById('app').style.backgroundImage = `url(${vibe.imgUrl})`
  // NOTE inject player, if player isn't injected it still works just stlying freaks out.
  document.getElementById('cloud-player').innerHTML = vibe.PlayerTemplate
}

export class VibesController{
  constructor(){
    this.getVibes()
    ProxyState.on('vibes', _drawVibes)
    ProxyState.on('activeVibe', _drawActiveVibe)
  }

  async getVibes(){
    try {
      await vibesService.getVibes()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error)
    }
  }

  async getActiveVibe(id){
    try {
      await vibesService.getActiveVibe(id)
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error)
    }
  }
}