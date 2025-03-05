function sendNotification(email){
    if(!email.includes("@")){
        return "invalid email";
    }
        let splittedEmail = email.split('@')
        console.log(splittedEmail);
    
        const userName = splittedEmail[0];
        const domainName = splittedEmail[1];
        console.log(userName, domainName);
       
        const newString = userName + ' sent you an email from ' + domainName;
        return newString;
}
let result = sendNotification('polash.ph@gmail.com');
console.log(result);