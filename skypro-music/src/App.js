import AppRoutes from "./routes";


function App() {

  window.localStorage.setItem('user', 'df');
  
  return (
    <AppRoutes user={window.localStorage.getItem('user')} />
  );
}

export default App;
