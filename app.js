const countNoOfTimes = (arr) => {
    const NoOfTimes = {};
    
    for (let k = 0; k < arr.length; k++) {
    const num = arr[k];
    NoOfTimes[num] = NoOfTimes[num] ? NoOfTimes[num] + 1 : 1;
    }
    
    return NoOfTimes;
    };
    
    const arr = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5]; 
    console.log(countNoOfTimes(arr));