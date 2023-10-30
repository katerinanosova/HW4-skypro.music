export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';

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

export const nextTrack = () => ({
    type: NEXT_TRACK
})

export const prevTrack = () => ({
    type: PREV_TRACK
})
