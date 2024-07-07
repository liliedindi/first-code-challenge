function gradingSystem (marks){
 if ( marks>79 && marks<=100){
    return 'you got an A!'
} else if( marks>60 && marks <=79){ 
    return 'You got a B!'
} else if(marks>49 && marks <=60){
    return 'You got a C!'
}else if(marks>40 && marks<=49){
    return 'You got a D!'
} else if (marks>=0 && marks <=40){
     return 'You got an E.'
} else { return 'What are your marks?' }
}
//console.log(gradingSystem())
// this checks the marks that are inputted and assigns a grade accordingly