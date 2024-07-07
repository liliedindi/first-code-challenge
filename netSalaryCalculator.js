function grossSalary(basicSalary, benefits){ return basicSalary + benefits}
// the above calculates the total gross salary
//console.log(grossSalary(200000,50000))
const payee = (basicSalary,benefits) => {
    if (grossSalary(basicSalary,benefits)<=24000){
        return (grossSalary(basicSalary,benefits)*10)/100
    } else if(grossSalary(basicSalary, benefits)>24000 && grossSalary(basicSalary,benefits)<=32333){
        return (grossSalary(basicSalary,benefits)*25)/100
    } else if (grossSalary(basicSalary,benefits)>32333 && grossSalary(basicSalary,benefits)<= 500000){
        return (grossSalary(basicSalary,benefits)*30)/100
    } else if (grossSalary(basicSalary,benefits)>500000 && grossSalary(basicSalary,benefits)<=800000){
        return (grossSalary(basicSalary,benefits)*32.5)/100
    } else { return (grossSalary(basicSalary,benefits)*35)/100 }
}
//console.log(payee(200000,50000))
// the above calculates the payee from the value of the gross salary
const nhif = (basicSalary,benefits)=>{
    let health
    switch (grossSalary(basicSalary,benefits)) { 
        case (grossSalary(basicSalary,benefits)<6000):
       health= 150;
       break;
        case (grossSalary(basicSalary,benefits)>=6000 && grossSalary(basicSalary,benefits) <8000):
           return health = 300;
            break;
        case (grossSalary(basicSalary,benefits)>=8000 && grossSalary(basicSalary,benefits)<12000):
           return health = 400;
            break;
        case (grossSalary(basicSalary,benefits) >= 12000 && grossSalary(basicSalary,benefits) < 15000):
           return health = 500;
            break;
        case (grossSalary(basicSalary,benefits) >= 15000 && grossSalary(basicSalary,benefits) < 20000):
           return health = 600;
            break;
        case (grossSalary(basicSalary,benefits) >= 20000 && grossSalary(basicSalary,benefits) < 25000):
           return health = 750;
            break;
        case (grossSalary(basicSalary,benefits) >= 25000 && grossSalary(basicSalary,benefits) < 30000):
           return health = 850;
            break;
        case (grossSalary(basicSalary,benefits) >= 30000 && grossSalary(basicSalary,benefits) < 35000):
           return health = 900;
            break;
        case (grossSalary(basicSalary,benefits) >= 35000 && grossSalary(basicSalary,benefits) < 40000):
           return health = 950;
            break;
        case (grossSalary(basicSalary,benefits) >= 40000 && grossSalary(basicSalary,benefits) < 45000):
           return health = 1000;
            break;
        case (grossSalary(basicSalary,benefits) >= 45000 && grossSalary(basicSalary,benefits) < 50000):
           return  health = 1100;
            break;
        case (grossSalary(basicSalary,benefits) >= 50000 && grossSalary(basicSalary,benefits) < 60000):
           return  health = 1200;
            break;
        case (grossSalary(basicSalary,benefits) >= 60000 && grossSalary(basicSalary,benefits) < 70000):
            return health = 1300;
            break;
        case (grossSalary(basicSalary,benefits) >= 70000 && grossSalary(basicSalary,benefits) < 80000):
            return health = 1400;
            break;
        case (grossSalary(basicSalary,benefits) >= 80000 && grossSalary(basicSalary,benefits) < 90000):
           return  health = 1500;
            break;
        case (grossSalary(basicSalary,benefits) >= 90000 && grossSalary(basicSalary,benefits) < 100000):
            return health = 1600;
            break;
        default :return health= 1700;
    }}

//console.log(nhif(200000,50000))
// this assigns the NHIF contribution depending on the gross salary bracket one belongs to. it uses gross salary as an input so as to assign NHIF amount.
const nssf = () => { return (7000*6)/100}
//console.log(nssf())
// this code above calculated the standard NSSF assuming the tier 2 is canceled due to presence of an alternative pension scheme.
const deductions =(basicSalary,benefits)=>{ return nssf()+ nhif(basicSalary,benefits) + payee(basicSalary,benefits)}
//console.log(deductions(200000,50000))
//the above sums up all expected deductions from gross salary
function netSalary (basicSalary,benefits){
    return grossSalary(basicSalary,benefits)- deductions(basicSalary,benefits)
}
//console.log(netSalary(200000,50000))
//this last one goes ahead to subtract deductions from gross salary