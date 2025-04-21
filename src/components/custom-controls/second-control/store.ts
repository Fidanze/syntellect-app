import { makeAutoObservable } from "mobx";

class Store {
  inputValue: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  changeInput(text: string) {
    this.inputValue = text
  }

  alertNumber() {
    if (this.inputValue !== '' && !isNaN(Number(this.inputValue))) {
      alert(this.inputValue)
    }
  }

  alertValue() {
    this.inputValue !== '' && alert(this.inputValue)
  }
}

export default Store;