import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login.jsx';
import NewLogin from './components/NewLogin';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/newlogin' element={<NewLogin />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
