
//  마라톤 한명빼고 완주 

// participant 참여한 선수들 이름들

//  completion 완주한 선수 이름
// participant 1작다

// 이름은 1개 이상 20개 이하 알파벳 소분자로 이루어져 있다
// random으로 1이상 100000명 이하
// function arrMark(){
//     let forCnt = Math.ceil((Math.random() *100000));
//     let ea = 'abcdefgfijklnmopqrstuvwxyz';
//     let participant = [];
//     let completion = [];
//     for(let i = 0; i < forCnt; i++){
        
//         let nameCnt = Math.ceil(Math.random()  * 20);
//         let name = '';
//         for (let j = 0; j < nameCnt; j++) {
//             let rc = Math.ceil(Math.random()  * ea.length);
//             name += ea[rc];
//         }
//         participant.push(name);
//         if(forCnt - 1 !== i) completion.push(name);
//     }
//     return [participant, completion];
// }


// participant 참여한 선수들 이름들
let participant = 	["mislav", "stanko", "mislav", "ana","mislav"]
 
//  completion 완주한 선수 이름
let completion = ["stanko", "ana", "mislav","mislav"]


// 정규식으로 해보자
// function solution(participant, completion){
//     let str = participant.join(' ');
//     for(i = 0, cnt = completion.length; i < cnt; i++ ){
//         try {
//             const re = new RegExp(completion[i]);
//             str = str.replace(re, '');
//         } catch (e) {
//         }
//     }
//     return str.trim();
// }




// var solution = (participant,completion)=> participant.find(participant=> !completion[participant]--, completion.map(participant=> completion[participant] = (completion[participant]|0) +1))

// 객체로 
function solution1(participant, completion) {
    const repository = {};
    // 참가자 길이만큼
    for (let index = 0; index < participant.length; index++) {

        const participantPlayer = participant[index];
        const completionPlayer = completion[index];

        toggle(participantPlayer, repository);
        toggle(completionPlayer, repository);
    }

    return Object.keys(repository)[0];
}

function toggle(player, repository) {
    if (player && repository[player] !== undefined) {
        delete repository[player];
    } else if (player && repository[player] === undefined) {
        repository[player] = '';
    }
    console.log(repository);
}

const solution = (participant,completion) => {
    completion.map(name => completion[name] = (completion[name]|0)+1);
    return participant.find((name) => !completion[name]--); 
}; 


console.log(solution(participant, completion));

// 객체로 해보기
// function solution(participant, completion){

//     const storage = {};
    
//     for (let i = 0; i < participant.length; i++) {
//         const partPeople = participant[i];
//         const completePeople = completion[i];


//         storage[partPeople] = partPeople;
//         if(completePeople) storage[completePeople] = completePeople;

//         delete storage[completePeople];
//     }
//     console.log(storage)
//     for (let i = 0; i < completion.length; i++) {
//         if(storage[completePeople]) delete storage[completePeople]; 
//     }
//     let result = Object.values(storage)[0];
    
//     return result;
    
// }

// sort
// function solution(participant, completion){


//     participant = participant.sort();
//     completion = completion.sort();

//     let result;
//     participant.forEach((el,idx) => {
//         if(el !== completion[idx]) result = el;
        
//     })
//     return result;
    
// }