import "./App.css";
import AudioPlayer from "./Components/AudioPlayer";
import NavMenu from "./Components/NavMenu";
import Sidebar from "./Components/Sidebar";
import Tracklist from "./Components/Tracklist";

function App() {
  return (
  <div className="wrapper">
    <div className="container">
    <main className="main">
      <NavMenu />
      <Tracklist />
      <Sidebar />
    </main>
    <AudioPlayer />
    <footer className="footer" />
  </div>
</div>

  );
}

export default App;
