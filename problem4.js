function calculateFinalScore(input) {
    if(typeof input !== "object"){
        return "invalid input"
    }
    if (typeof input.name !== "String" ||
        typeof input.testScore !== "number"
        || typeof input.schoolGrade !== "number"
        || typeof input.isFamily !== "boolean"
    ) {
        return "invalid input";
    }
    let finalScore = input.testScore + input.schoolGrade;
    if (input.isFamily === true) {
        finalScore += 20;
    }
    //    console.log(finalScore)
    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}

let result = calculateFinalScore({
    name: 'polash',
    testScore: "oeroi3",
    schoolGrade: 25,
    isFamily: true
})
console.log(result)