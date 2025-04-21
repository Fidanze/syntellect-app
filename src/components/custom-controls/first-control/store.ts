import { makeAutoObservable } from "mobx"

class Store  {
  inputValue: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  changeInput(text: string) {
    this.inputValue = text
  }

  clearInput() {
    this.inputValue = ''
  }

  helloInput() {
    this.inputValue = 'Hello world'
  }
}

export default Store