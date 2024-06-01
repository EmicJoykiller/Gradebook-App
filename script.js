// step 1
function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++){
      total += scores[i];
    }
    let average = total / scores.length;
    return average;
    }
    
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
    console.log(getAverage([1,2,3,4,5,6,7,8,9,10]))

// step 2
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    
    if (score ===100){
      return "A++"
    } else if (score <=99 && score >=90){
      return "A"
    } else if (score <=89 && score >=80){
      return "B"
    } else if (score <=79 && score >=70){
      return "C"
    } else if (score <=69 && score >= 60){
      return "D"
    } else{
      return "F"
    };
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

// step 3
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade !== "F"){
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  // step 4

  