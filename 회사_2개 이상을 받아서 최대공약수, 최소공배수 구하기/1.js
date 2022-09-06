
sol([2,6,8,7])


const solution = (participant,completion) => {
    completion.map(name => completion[name] = (completion[name]|0)+1);
    return participant.find((name) => !completion[name]--); 
}; 

function sol(nums){
    nums = nums.sort();
    let measures  = {};

    // 값들에 약수 구하는 로직
    for(let j = 0,cnt = nums.length; j < cnt; j++){
        let maxSqrt = Math.sqrt(nums[j]);
        let measure = [];
        for(let i = 1; i <= maxSqrt; i++){
            if(nums[j] % i === 0){

                measures[i] = ((measures[i]|0)+1)
                if (nums[j] / i) measure[nums[j] / i] = ((measures[nums[j] / i]|0)+1)
                
                // measure.push(i);
            }
        }
        // measures[nums[j]] = measure.sort();
    }
    console.log(measures);
    // nums배열에서 가장 작은수의 약수 중 가장 큰 수 
    // let maxN;
    // for(let i = 0,cnt = nums.length; i < cnt; i++){
    //     if(i === 0){ 
    //         maxN = measures[nums[i]].length;
    //         maxN = measures[nums[i]][maxN-1];
    //     }
    // }
    // console.log(Object.values(measures));
    
}

