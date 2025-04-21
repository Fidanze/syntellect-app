import { makeAutoObservable } from "mobx"
import { CountryInfo, getCountryByName } from "../../../api/apiService"

class Store {
  inputValue: string = ''
  hints: CountryInfo[] = []
  showHints: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get className() {
    return this.showHints ? 'hints': 'hints hidden'
  }

  changeInput(text: string) {
    this.inputValue = text
    this.showHints = !!text.length
  }

  chooseHint(hint: string) {
    this.inputValue = hint
    this.showHints = false
  }

  setHints(arr: CountryInfo[]) {
    this.hints = arr
  }

  loadHints(value: string, maxHints?: number) {
    getCountryByName(value).then(result => this.setHints(result.slice(0, maxHints)))
  }

}

export default Store