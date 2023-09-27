let arrayOfThanks = [];
function writeCards( arrayOfNames , niceWord){
    for (let name of arrayOfNames){
        arrayOfThanks.push(`Thank you, ${name}, for the wonderful ${niceWord} gift!`);
    }
    return arrayOfThanks;
}

function countDown(number){
    for (let count = number; count >= 0 ; count-- ){
        console.log(count);
    }
}