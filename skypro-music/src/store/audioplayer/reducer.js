import { SET_CURRENT_TRACK, PLAY, PAUSE, NEXT_TRACK, PREV_TRACK, SHUFFLE, FILTER, SET_INITIAL_TRACKS } from "./actions";

const initialState = {
    playing: false,
    playlist: [],
    track: null,
    shuffled: false,
    shuffledPlaylist: [],
    filteredPlaylist: [],
    FilterCriteria: {
        author: [],
        isActiveAuthor: false,
        genre: [],
        isActiveGenre: false,
        isActiveSort: false
    },
    initialTracksForFilter: [],
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

        case SET_INITIAL_TRACKS: {
            return {
                ...state,
                initialTracksForFilter: action.payload.data
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
            console.log(action.payload);

            if (action.payload.name === 'genre') {

            // для опции, если есть параллельно фильтры по имени
            const playlistWithAuthorFilter = state.initialTracksForFilter.filter(track => state.FilterCriteria.author?.includes(track.author));

                // удаляем фильтр при повторном нажатии
                if (state.FilterCriteria.genre?.includes(action.payload.item)) {
                    const newGenresFilter = state.FilterCriteria.genre.filter(item => item !== action.payload.item)

                    if (newGenresFilter.length > 0) {
                        const newFilteredPlaylist = currentPlaylist.filter(track => newGenresFilter.includes(track.genre));

                        return {
                            ...state,
                            filteredPlaylist: newFilteredPlaylist,
                            FilterCriteria: {
                                isActiveGenre: true,
                                genre: newGenresFilter
                            }
                        }
                    }
                    
                    return {
                        ...state,
                        filteredPlaylist: state.FilterCriteria.isActiveAuthor ? playlistWithAuthorFilter : state.initialTracksForFilter,
                        FilterCriteria: {
                            isActiveGenre: false,
                            genre: newGenresFilter
                        }
                    }
                    
                }

                

                const newGenresFilter = [...state.FilterCriteria.genre, action.payload.item];

                const PL = state.FilterCriteria.isActiveAuthor ? playlistWithAuthorFilter : state.initialTracksForFilter;

                const newFilteredPlaylist = PL.filter(track => newGenresFilter.includes(track.genre));
                console.log(newFilteredPlaylist);

                return {
                    ...state,
                    filteredPlaylist: newFilteredPlaylist,
                    FilterCriteria: {
                        isActiveGenre: true,
                        genre: newGenresFilter 
                    }
                }
            }

            if (action.payload.name === 'author') {
             
            // для опции, если есть параллельно фильтры по жанру
            const playlistWithGenreFilter = state.initialTracksForFilter.filter(track => state.FilterCriteria.genre?.includes(track.genre));
            
            // удаляем фильтр при повторном нажатии
            if (state.FilterCriteria.author?.includes(action.payload.item)) {
                const newAuthorFilter = state.FilterCriteria.author.filter(item => item !== action.payload.item);
                
                if (newAuthorFilter.length > 0) {
                    const newFilteredPlaylist = currentPlaylist.filter(track => newAuthorFilter.includes(track.author));

                    return {
                        ...state,
                        filteredPlaylist: newFilteredPlaylist,
                        FilterCriteria: {
                            isActiveAuthor: true,
                            author: newAuthorFilter
                        }
                    }
                }

                return {
                    ...state,
                    filteredPlaylist: state.FilterCriteria.isActiveGenre ? playlistWithGenreFilter : state.initialTracksForFilter,
                    FilterCriteria: {
                        isActiveAuthor: false,
                        author: newAuthorFilter
                    }
                }
            }

            const newAuthorFilter = [...state.FilterCriteria.author, action.payload.item];

            console.log(newAuthorFilter);

            const PL = state.FilterCriteria.isActiveGenre ? playlistWithGenreFilter : state.initialTracksForFilter;

            const newFilteredPlaylist = PL.filter(track => newAuthorFilter.includes(track.author));
            

            return {
                ...state,
                filteredPlaylist: newFilteredPlaylist,
                FilterCriteria: {
                    isActiveAuthor: true,
                    author: newAuthorFilter 
                }
            }


            }

            if (action.payload.name === 'release_date') {
                if (action.payload.item === 'Сначала старые') {
                    return {
                        ...state,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date)),
                        FilterCriteria: {
                            isActiveSort: true
                        }
                    }
                }
                if (action.payload.item === 'Сначала новые') {
                    return {
                        ...state,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date)),
                        FilterCriteria: {
                            isActiveSort: true
                        }
                    }
                }
                if (action.payload.item === 'По умолчанию') {
                    return {
                        ...state,
                        filteredPlaylist: currentPlaylist.slice().sort((a, b) => new Date(a.id) - new Date(b.id)),
                        FilterCriteria: {
                            isActiveSort: false
                        }
                    }
                }
            }



            return {
                ...state,
                filteredPlaylist: []
            }
        }

        default:
            return state
    }
}