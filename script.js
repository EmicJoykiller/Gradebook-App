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
