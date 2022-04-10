

export class Vibe{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.musicSource = data.musicSource
    this.plays = data.plays
  }

  // NOTE show this maybe? or a static for it?
  // get ListTemplate(){
  //   return `
  //   <div class="col-12 h-25 my-3 p-3 list-item" onclick="app.vibesController.getActiveVibe('${this.id}')">
  //     ${this.name}
  //   </div>
  //   `
  // }

  get PlayerTemplate(){
    return `
    
    <div class="pe-4 text-shadow">
      <h1> ${this.name}</h1>
      <p class="w-100 text-end"><b>plays ${this.plays}</b></p>
    </div>
    <iframe id="sound-cloud" width="250" height="300" scrolling="no" frameborder="no" allow="autoplay"
    src="${this.musicSource}"></iframe>
    `
  }
}