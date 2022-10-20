import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './route/Header/Header.component';
import Login from './components/Login/Login.component';
import Home from './route/Home/Home.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
