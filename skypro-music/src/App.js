import AppRoutes from "./routes";


function App() {

  window.localStorage.setItem('user', '');
  
  return (
    <AppRoutes user={window.localStorage.getItem('user')} />
  );
}

export default App;
