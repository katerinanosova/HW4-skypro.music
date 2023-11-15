import { useState } from "react";
import AppRoutes from "./routes";
// import { getTracksApi } from "./API/api-tracks";
import { userContext } from "./userContext";


function App() {
    
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) || null);
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')) || null);
  


  
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <userContext.Provider value={{ user, setUser, token, setToken }}>
        <AppRoutes 
        // user={user}
        // loading={loading}
        // tracks={tracks}
        // getTracksError={getTracksError}
         />
    </userContext.Provider> 
  );
}

export default App;
