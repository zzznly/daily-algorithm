function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((p, i) => Math.ceil((100 - p)/speeds[i]))
    
    let currentNode = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentNode) count++;
        else {
            answer.push(count);
            currentNode = days[i]
            count = 1;
        }
    }
    
    answer.push(count);
    return answer;
}