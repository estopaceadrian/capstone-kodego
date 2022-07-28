import Menu from './components/Menu';
import Home from './pages/Home/Home';
import Route from './routes/Route';

function App() {
  return (
    <div>
      <Menu />
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
