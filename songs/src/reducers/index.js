import { combineReducers } from 'redux';


const songReducer = () => {
    return [
        {
            title: 'Senorita',
            duration: '4:05',
        },
        {
            title: "I Heard You Got Too Little Last Night",
            duration: '2:33',
        },
        {
            title: "Look Alive",
            duration: '3:05',
        },
        {
            title: "Singles You Up",
            duration: '2:25',
        },
        {
            title: "Four Out of Five",
            duration: '9:05',
        },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});