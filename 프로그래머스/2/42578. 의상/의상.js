function solution(clothes) {
    const map = {};
    
    for (const [name, type] of clothes) {
        map[type] = (map[type] || 0) + 1
    }
    
    let result = 1;
    for (const type in map) {
        result *= map[type] + 1
    }
    
    return result - 1;
}