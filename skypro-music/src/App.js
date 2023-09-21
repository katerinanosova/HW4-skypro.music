import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import { getTracksApi } from "./API/api-tracks";


function App() {

  window.localStorage.setItem('user', 'df');

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
    <AppRoutes 
    user={window.localStorage.getItem('user')}
    loading={loading}
    tracks={tracks}
    getTracksError={getTracksError}
    currentTrack={currentTrack}
    setCurrentTrack={setCurrentTrack} />
  );
}

export default App;
