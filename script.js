const bill = document.getElementById("bill-inp")
const persons = document.querySelector("#person-inp")
const totalTip = document.querySelector(".tip-p")
const totalP = document.querySelector(".tot-p")
const btn = document.querySelectorAll("#btn")
const custom = document.querySelector("#custom")
const reset = document.querySelector("#reset-btn")
let Tip = 0
let Total = 0


persons.addEventListener('input', (e) => {

    btn.forEach((btn) =>{
        btn.addEventListener('click',(e) => {
           const btnValue =  e.currentTarget.value
            Tip = parseFloat(((e.currentTarget.value)/100) * parseFloat(bill.value) / parseInt(persons.value) )
            totalTip.innerText = `$${Tip}`
            let Tot = Total + Tip
           totalP.innerText = `$${Tot.toFixed(2)} `
           Tip = 0
        })
    })

    Total = parseFloat(parseFloat(bill.value) / parseInt(persons.value) ) + Tip
    totalP.innerText = `$${Total.toFixed(2)}`

   

    custom.addEventListener('input',(e) => {
            Tip = parseFloat(((e.currentTarget.value)/100) * parseFloat(bill.value) / parseInt(persons.value) )
            totalTip.innerText = `$${Tip}`
            let Tot = Total + Tip
           totalP.innerText = `$${Tot.toFixed(2)} `
           Tip = 0
        })
})

reset.addEventListener('click',(e) =>{
    bill.placeholder = "0"
    persons.value = "0"
    totalTip.innerText = `$0`
    totalP.innerText = `$0`
})