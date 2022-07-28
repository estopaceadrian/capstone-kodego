import Menu from './components/Menu';
import Landing from './pages/Landing/Landing';
import Route from './routes/Route';
function App() {
  return (
    <div>
      <Menu />
      <Route path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
