import { SET_CURRENT_TRACK, PLAY, PAUSE, NEXT_TRACK, PREV_TRACK, SHUFFLE, FILTER } from "./actions";

const initialState = {
    playing: false,
    playlist: [],
    track: null,
    shuffled: false,
    shuffledPlaylist: [],
    filtered: false,
    filteredPlaylist: []
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

        case SHUFFLE: {
            
            return {
                ...state,
                shuffled: !state.shuffled
            }
        }

        case FILTER: {
            const currentPlaylist = action.payload.tracks;

            if (action.payload.name === 'genre') {
                return {
                    ...state,
                    filtered: true,
                    filteredPlaylist: currentPlaylist.filter(track => track.genre === action.payload.item)
                }
            }

            if (action.payload.name === 'author') {
                return {
                    ...state,
                    filtered: true,
                    filteredPlaylist: currentPlaylist.filter(track => track.author === action.payload.item)
                }              
            }

            if (action.payload.name === 'release_date') {

                if (action.payload.item === 'Сначала старые') {
                    return {
                        ...state,
                        filtered: true,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
                    }
                }

                if (action.payload.item === 'Сначала новые') {
                    return {
                        ...state,
                        filtered: true,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
                    }
                }

                if (action.payload.item === 'По умолчанию') {
                    return {
                        ...state,
                        filtered: true,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(a.id) - new Date(b.id))
                    }
                }

                return {
                    ...state,
                    filtered: false,
                    filteredPlaylist: currentPlaylist
                }
            }



            return {
                ...state,
                filtered: !state.filtered,
                filteredPlaylist: []
            }
        }

        default:
            return state
    }
}