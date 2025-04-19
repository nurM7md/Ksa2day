import {BrowserRouter , Routes , Route, HashRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login.jsx';
import NewLogin from './components/NewLogin';

function App() {
  return (
    
    <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/newlogin' element={<NewLogin />}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
