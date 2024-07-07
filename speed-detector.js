const demerit =(speed) => {
  return  speed = (speed<70) ? (0) : Math.floor( (speed-70)/5)
}
//console.log(demrit(60))
// this above code checks the speed if above 70. It then claculates number of demerits if speed is above 70
function outPut (speed){
    if(speed >70 ){
    return 'Points:' + demerit(speed)}
    else {
        return 'OK!'
    }
}
//console.log(outPut(60))
// this second block assigns an output depending on the speed and number of demerits
function license (speed){
    if (demerit(speed) <= 12){
    return outPut(speed)
    } else { return 'License suspended.'
    }
}
//console.log(license(1000))
// this last block then checks number of demerits and if above 12 goes ahead to suspend license