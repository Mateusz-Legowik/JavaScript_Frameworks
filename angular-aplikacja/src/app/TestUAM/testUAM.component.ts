import { Component } from '@angular/core';

@Component({
  selector: 'app-TestUAM',
  templateUrl: './testUAM.component.html',
  styleUrls: ['../app.component.css']
})
export class TestUAM {
  title = 'angular-aplikacja';
  selectors = [] as number[]
  number = 0
  operationStartTime = 0
  operationEndTime = 0
  temp = ''
  create() {
    this.operationStartTime = performance.now()
    let howMany = parseInt((<HTMLInputElement>document.getElementById("howMany")).value)
    this.number = howMany
    let temp = []
    for (let i = 0; i < howMany; i++) {
      temp.push(
        i)
    }
    this.selectors = temp
  }

  add() {
    this.operationStartTime = performance.now()
    let howMany = parseInt((<HTMLInputElement>document.getElementById("howMany")).value)
    let oldNumber = this.number
    let newNumber = oldNumber + howMany
    let temp = this.selectors
    for (oldNumber; oldNumber < newNumber; oldNumber++) {
      temp.push(
        (oldNumber))
    }
    this.selectors = temp
    this.number = newNumber
  }

  ddelete() {
    this.operationStartTime = performance.now()
    let howMany = parseInt((<HTMLInputElement>document.getElementById("howMany")).value)
    let oldNumber = this.number
    let newNumber = oldNumber - howMany
    let temp = this.selectors
    temp.splice(newNumber, howMany)
    this.selectors = temp
    this.number = newNumber
  }

  update() {
    this.operationStartTime = performance.now()
    let howMany = parseInt((<HTMLInputElement>document.getElementById("howMany")).value)
    let min = Math.ceil(1)
    let max = Math.floor(1001)

    let oldNumber = this.number
    let newNumber = oldNumber - howMany
    let temp = this.selectors;
    for (newNumber - 1; newNumber < oldNumber; newNumber++) {
      let random = Math.floor(Math.random() * (max - min)) + min
      temp[newNumber] = random;
    }
    this.number = oldNumber
  }

  clean() {
    this.operationStartTime = performance.now()
    this.selectors = []
    this.number = 0
  }

  ngAfterViewChecked() {
    this.operationEndTime = performance.now()
    this.temp = String(this.operationEndTime - this.operationStartTime);
    (<HTMLInputElement>document.getElementById('timer')).innerHTML = this.temp
  }
}