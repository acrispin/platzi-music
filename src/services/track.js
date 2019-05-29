import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function(q) {
    const type = 'track';
    
    return platziMusicService
        .get('/search', {
            params: { q, type } // params: { q:q, type:type }
        })
        .then( res => res.data )
        // .then(function(res) { 
        //     return res.data 
        // })
}

trackService.getTrackById = function(idTrack) {
    return platziMusicService
        .get(`/tracks/${idTrack}`)
        .then( res => res.data );
}

export default trackService;
