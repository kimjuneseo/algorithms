// console.time();
// console.log(sol([24, 36, 42, 6990214])); 
// console.timeEnd();

// function sol(nums){
//     let measures  = {};
//     // 객체에 약수키 : 갯수
//     for(let j = 0,cnt = nums.length; j < cnt; j++){
//         let maxSqrt = Math.sqrt(nums[j]);
//         for(let i = 1; i <= maxSqrt; i++){
//             if(nums[j] % i === 0){
//                 measures[i] = ((measures[i]|0)+1);
//                 if (nums[j] / i != i) measures[nums[j] / i] = ((measures[nums[j] / i]|0)+1);
//             }
//         }
//     }
//     let measureKeys = Object.keys(measures).map(el => parseInt(el)).sort((a,b) => b-a);

//     let result = measureKeys.filter((el,idx) => {
//         if(measures[el] === nums.length) return measureKeys[idx];
//     })[0];
//     return result;
// }

// console.log(sol1([8,18,24]));
// function sol1(nums){
//     let measures  = {};
//     // 객체에 약수키 : 갯수
//     for(let j = 0,cnt = nums.length; j < cnt; j++){
//         let maxSqrt = Math.sqrt(nums[j]);
//         let measure = {};
//         for(let i = 1; i <= maxSqrt; i++){
//             if(nums[j] % i === 0){
//                 console.log(i);
//                 measure[i] = ((measure[i]|0)+1);
//                 if (nums[j] / i != i) measure[nums[j] / i] = ((measure[nums[j] / i]|0)+1);
//             }
//         }
//         measures[nums[j]] = measure;
//     }
//     console.log(measures);
//     let measureKeys = Object.keys(measures).map(el => parseInt(el)).sort((a,b) => b-a);

//     let result = measureKeys.filter((el,idx) => {
//         if(measures[el] === nums.length) return measureKeys[idx];
//     })[0];
//     return result;
// }



console.time();
console.log(sol2([24, 36, 42])); 
console.timeEnd();

function sol2(nums){
    let measures  = {};
    // 객체에 약수키 : 갯수
    for(let j = 0,cnt = nums.length; j < cnt; j++){
        let maxSqrt = Math.sqrt(nums[j]);
        for(let i = 1; i <= maxSqrt; i++){
            if(nums[j] % i === 0){
                measures[i] = ((measures[i]|0)+1);
                if (nums[j] / i != i) measures[nums[j] / i] = ((measures[nums[j] / i]|0)+1);
            }
        }
    }
    console.log(measures);
    let measureKeys = Object.keys(measures).map(el => parseInt(el)).sort((a,b) => b-a);

    let result = measureKeys.filter((el,idx) => {
        if(measures[el] === nums.length) return measureKeys[idx];
    })[0];
    return result;
}
