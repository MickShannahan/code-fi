import { Pop } from "../Utils/Pop.js"


function _drawClock(time){
  time = time/1000
  console.log(time)
  let mins = Math.floor(time/60)
  let secs = time%60
  if(secs < 10) secs = '0'+ secs
  document.getElementById('clock').innerText = `${mins}:${secs}`
}

export class TimerController{
  constructor(){

  }
  timer = null

  startTimer(){
    window.event.preventDefault()
    let form = window.event.target
    let time = form.mins.value
    console.log('timer set for '+ time + ' minutes')
    let timeLeft = time * 60000
    if(!this.timer){
      this.timer = setInterval(() => {
        timeLeft -= 1000
        _drawClock(timeLeft)
        if(timeLeft <= 0){
          this.timer = clearInterval(this.timer)
          this.timerFinished()
        }
      }, 1000);
    }
  }

  timerFinished(){
    Pop.toast('Times up', 'warning', 
    'center', 10000)
    document.getElementById('pop').play()
    document.getElementById('clock').innerText = ''
  }
}