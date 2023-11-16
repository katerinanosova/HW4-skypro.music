export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';
export const SHUFFLE = 'SHUFFLE';
export const FILTER = 'FILTER';
export const SET_INITIAL_TRACKS = 'SET_INITIAL_TRACKS';
export const SEARCH = 'SEARCH';

export const setCurrentTrack = ({ playlist, track }) => ({
    type: SET_CURRENT_TRACK,
    payload: {
        playlist,
        track
    }
})

export const setFilter = ({ name, item, tracks }) => ({
    type: FILTER,
    payload: {
        name,
        item,
        tracks
    }
})

export const setSearch = ({ value, tracks }) => ({
    type: SEARCH,
    payload: {
        value,
        tracks
    }
})

export const setInitialTracksForFilter = ({ data }) => ({
    type: SET_INITIAL_TRACKS,
    payload: {
        data
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

export const shuffle = () => ({
    type: SHUFFLE
})
