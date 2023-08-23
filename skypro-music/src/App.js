import { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from "./Components/AudioPlayer";
import NavMenu from "./Components/NavMenu";
import Sidebar from "./Components/Sidebar";
import Tracklist from "./Components/Tracklist";

function delay(interval) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve();
      }, interval);
  });
};

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    delay(3000).then(() => {
      setLoading(!loading);
    })
  }, []);
  


  return (
  <div className="wrapper">
    <div className="container">
    <main className="main">
      <NavMenu />
      <Tracklist isLoading={loading}/>
      <Sidebar isLoading={loading}/>
    </main>
    <AudioPlayer />
    <footer className="footer" />
  </div>
</div>

  );
}

export default App;
