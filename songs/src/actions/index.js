export const selectedSong = (song) => {
    return {
        //Return an action
        type: 'SONG_SELECTED',
        payload: song
    };
}