const input = require('./input.json')
let count = 0
let prev = 0

function doIt(){
    input.forEach((num) => {
        if(parseInt(num) > prev){
            console.log(`⬆️ ${parseInt(num)} is an increase on ${prev}`)
            count++
        }
        else{
            console.log(`⬇️ ${parseInt(num)} is not an increase on ${prev}`)
        }
        prev = parseInt(num)
    })
    return count - 1 //first one doesn't count
}

console.log(doIt())