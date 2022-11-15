import MainContent from './pages/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import './styles/App.css'

import {
  Routes,
  Route,
} from "react-router-dom";
import FindArtists from './pages/FindArtists/FindArtists';
import ArtistDetail from './pages/ArtistDetail/ArtistDetail';
import AccountInfo from './pages/AccountInfo/AccountInfo';
import MakeDrop from './pages/MakeDrop/MakeDrop';


function App() {
  return (
    <div className="App">
        <SideBar></SideBar>
        
        <Routes>
            <Route path='/' element={<MainContent/>}/>
            <Route path='/find-artists' element={<FindArtists/>}/>
            <Route path='/artist-detail' element={<ArtistDetail/>}/>
            <Route path='/info' element={<AccountInfo/>}/>
            <Route path='/make-drop' element={<MakeDrop/>}/>
        </Routes>
    </div>
  );
}

export default App;
