const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid =  parseInt(primaryPhone) //output is equal to NaN
const secondaryValid = parseInt(secondaryPhone)//Output== valid number
//console.log(typeof parseInt(primaryPhone))
//console.log(typeof parseInt(secondaryPhone))
//console.log('Primary phone is valid numerical string:', primaryValid)
//console.log('Secondary phone is valid numerical string:', secondaryValid )

if(primaryValid){
    console.log('Primary phone is valid numerical string:', true)
} else{
    console.log('Primary phone is valid numerical string:', false)
}

if(secondaryValid){
    console.log('secondary phone is valid numerical string:', true)
} else{
    console.log('secondary phone is valid numerical string:', false)
}