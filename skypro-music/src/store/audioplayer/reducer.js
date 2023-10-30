import { SET_CURRENT_TRACK, PLAY, PAUSE } from "./actions";

const initialState = {
    playing: false,
    playlist: [],
    track: null,
    shuffled: false,
    shuffledPlaylist: []
}

export default function audioplayerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK: {
            return {
                ...state,
                playlist: action.payload.playlist,
                track: action.payload.track,
                shuffledPlaylist: [...action.payload.playlist].sort(
                    () => 0.5 - Math.random(),
                ),
                playing: true
            }
        }

        case PLAY: {
            return {
                ...state,
                playing: true
            }
        }

        case PAUSE: {
            return {
                ...state,
                playing: false
            }
        }

        default:
            return state
    }
}