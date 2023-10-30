export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';

export const setCurrentTrack = ({ playlist, track }) => ({
    type: SET_CURRENT_TRACK,
    payload: {
        playlist,
        track
    }
})

export const startPlaying = () => ({
    type: PLAY
})

export const startPause = () => ({
    type: PAUSE
})
