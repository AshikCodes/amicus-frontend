import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      </Helmet> */}
      <Login />
    </div>
    </Router>
  );
}

export default App;
