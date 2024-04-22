const trade = (quantity, price, funds) =>{
 const total = quantity*price
 if (total > funds){
return("нет денег")
 }
 else  {
return(`you ordered ${quantity} droids cots is ${total}`)
 }
}
console.log(trade(3, 1000, 5000))