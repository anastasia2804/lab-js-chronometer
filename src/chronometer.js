class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
        this.currentTime ++;
  

        if (arguments.length == 1){
          printTimeCallback()
        }
     }, 1000)


  }

  getMinutes() {
    let currentTimeInSeconds = this.currentTime
    let currentTimeInMinutes = Math.floor(currentTimeInSeconds/60)
    return currentTimeInMinutes
  }

  getSeconds() {
    let secondsPassed = this.currentTime % 60
    return secondsPassed
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId) 
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    minutes = this.computeTwoDigitNumber(minutes)
    seconds = this.computeTwoDigitNumber(seconds)

    return minutes + ":" + seconds
  }
}
