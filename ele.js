import { myclass } from './main.js'
const used = document.querySelector("#unita")
const amount = document.querySelector("#bill-amount")
const button = document.querySelector("#butt")
const actual = document.querySelector("#reading")
const currentAmount = document.querySelector("#current-amt")


button.addEventListener("click", () => {
  let usedunit = used.value
  amount.innerHTML = usedunit
  realunit(usedunit)
})

function realunit(present) {
  let previousunit = 100
  let newunit = present - previousunit
  let result = newunit
  currentAmount.innerHTML = result

  let obj = new myclass(result, amount, actual)

  obj.calculate()
  obj.render()
}
