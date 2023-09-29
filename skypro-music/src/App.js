import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import { getTracksApi } from "./API/api-tracks";
import { userContext } from "./userContext";


function App() {
    
  const [user, setUser] = useState(window.localStorage.getItem('user') || null);

  const [loading, setLoading] = useState(true);

  const [tracks, setTracks] = useState([
    {
      id: 1,
      name: '',
      author: '',
      album: ''
    }, {
      id: 2,
      name: '',
      author: '',
      album: ''
    }, {
      id: 3,
      name: '',
      author: '',
      album: ''
    }, {
      id: 4,
      name: '',
      author: '',
      album: ''
    }
  ]);
  const [getTracksError, setGetTracksError] = useState(null);

  const [currentTrack, setCurrentTrack] = useState(null);
 
  useEffect(() => {
      getTracksApi().then((tracksApi) => {
        setTracks(tracksApi);
      })
      .then(() => {
        setLoading(false); 
      })
      .catch((error) => {
        setGetTracksError(error.message)
      })
          
  }, []);
  
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userContext.Provider value={{ user, setUser }}>
        <AppRoutes 
        user={user}
        loading={loading}
        tracks={tracks}
        getTracksError={getTracksError}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        />
    </userContext.Provider> 
  );
}

export default App;
