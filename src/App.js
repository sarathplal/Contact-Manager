import './App.css';
import Allcontacts from './components/Allcontacts';
import Headers from './components/Headers';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import View from './components/View';
function App() {
  return (
    <>

      <header><Headers /></header>

      <Routes>
        <Route path='' element={<Allcontacts />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='/view/:id' element={<View />}></Route>
      </Routes>


    </>
  );
}

export default App;
