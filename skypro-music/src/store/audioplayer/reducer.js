import { SET_CURRENT_TRACK, PLAY, PAUSE, NEXT_TRACK, PREV_TRACK } from "./actions";

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

        case NEXT_TRACK: {
            const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.track.id)

            const nextTrack = playlist[currentTrackIndex + 1]

            if (!nextTrack) {
                return state
            }

            return {
                ...state,
                track: nextTrack
            }
        }

        case PREV_TRACK: {
            const playlist = state.shuffled ? state.shuffledPlaylist : state.playlist;
            const currentTrackIndex = playlist.findIndex((track) => track.id === state.track.id)

            if (currentTrackIndex === 0) {
                return state
            }

            const prevTrack = playlist[currentTrackIndex - 1]

            if (!prevTrack) {
                return state
            }

            return {
                ...state,
                track: prevTrack
            }
        }

        default:
            return state
    }
}