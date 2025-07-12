function solution(genres, plays) {
    const genreMap = new Map();
    const genrePlayCount = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        genrePlayCount.set(genre, (genrePlayCount.get(genre) || 0) + play)
        
        if(!genreMap.has(genre)) genreMap.set(genre, [])
        genreMap.get(genre).push({ id: i, play });
    }
    
    const sortedGenres = [...genrePlayCount.entries()]
                            .sort((a, b) => b[1] - a[1])
                            .map(([genre]) => genre);
    
    const result = [];
    
    for (const genre of sortedGenres) {
        const songs = genreMap.get(genre);
        songs.sort((a, b) => {
            if (b.play !== a.play) return b.play - a.play; // 재생수 높은순
            return a.id - b.id; // 고유번호 낮은순
        });
        
        result.push(songs[0].id);
        if (songs[1]) result.push(songs[1].id);
    }
    
    return result;
}