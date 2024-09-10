
function calculateTax(income, expenses) {

    if(expenses > income  || 0>=expenses || 0>=income){
        return 'Invalid Input';
    }

    let remaining  = (income - expenses) ;
    let tax = remaining * 0.2; 

   if(0<=income || 0<=expenses){
       return tax;
   }
  
}







function sendNotification(email) {
   
     
    if(email.indexOf('@') === -1){
     return 'Invalid Email';
    }

    const parts = email.split('@');

    if(parts.length !== 2){
        return 'Invalid Email';
    }
     const username = parts[0];
     const domain = parts[1];

     return username + " sent you an email from " + domain;
}





function checkDigitsInName(name){
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(let i=0; i<name.length;i++){
        if(!isNaN(name[i]) && name[i] !== ' '){
            return true;
        }
    }
    return false;
}








function calculateFinalScore(obj) {
   
    const {name,testScore,schoolGrade,isFFamily} = obj;

    if(typeof name !== 'string' ||
       typeof testScore !== 'number' || testScore > 50 ||
       typeof schoolGrade !=='number' || schoolGrade > 30 ||
       typeof isFFamily !== 'boolean' ){
        return "Invalid Input";
       }

       let finalscore = testScore + schoolGrade;

       if(isFFamily === true){
        finalscore += 20;
       }
       
        return finalscore >= 80;
    
}















function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }


    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let averageTime = Math.round(totalTime / waitingTimes.length);

    
    let peopleWaiting = serialNumber - 1 - waitingTimes.length;


    if (peopleWaiting <= 0) {
        return 0;
    }

    return peopleWaiting * averageTime;
}
