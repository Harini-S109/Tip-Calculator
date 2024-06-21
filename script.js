const bill = document.getElementById("bill-inp")
const persons = document.querySelector("#person-inp")
const totalTip = document.querySelector(".tip-p")
const totalP = document.querySelector(".tot-p")
const btn = document.querySelectorAll("#btn")
const custom = document.querySelector("#custom")
const reset = document.querySelector("#reset-btn")
const error  = document.getElementById("error")
let Tip = 0
let Total = 0


if( persons.value === 0){
    error.style.display = "block"
}

persons.addEventListener('input', (e) => {

    if( parseInt(persons.value) === 0 ){
        error.style.display = "block"
    }
    else{
        
    btn.forEach((btn) =>{
        
        btn.addEventListener('click',(e) => {
            if( parseInt(persons.value) === 0 || persons.value === " "){
                error.style.display = "block"
            }
            else{
            Tip = parseFloat(((e.currentTarget.value)/100) * parseFloat(bill.value) / parseInt(persons.value) )
            totalTip.innerText = `$${Tip.toFixed(2)}`
            let Tot = Total + Tip
           totalP.innerText = `$${Tot.toFixed(2)} `
           Tip = 0
            }
        }) 
    })

    Total = parseFloat(parseFloat(bill.value) / parseInt(persons.value) ) + Tip
    totalP.innerText = `$${Total.toFixed(2)}`

   

    custom.addEventListener('input',(e) => {
            Tip = parseFloat(((e.currentTarget.value)/100) * parseFloat(bill.value) / parseInt(persons.value) )
            totalTip.innerText = `$${Tip.toFixed(2)}`
            let Tot = Total + Tip
           totalP.innerText = `$${Tot.toFixed(2)} `
           Tip = 0
        })
    }
})

reset.addEventListener('click',(e) =>{
    bill.value = "0"
    persons.value = "0"
    error.style.display = "none"
    custom.placeholder = "0"
    totalTip.innerText = `$0`
    totalP.innerText = `$0`
})
