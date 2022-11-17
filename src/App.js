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
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin.jsx';
import AddArtist from './pages/AddArtist/AddArtist';


function App() {
  return (
    <div className="App">
      <SideBar></SideBar>

      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/find-artists' element={<FindArtists />} />
        <Route path={'/profile'}>
          <Route path=":id" element={<AccountInfo />} />
        </Route>
        <Route path='/artist-detail' element={<ArtistDetail />} />
        {/* <Route path='/info' element={<AccountInfo />} /> */}
        <Route path='/make-drop' element={<MakeDrop />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/create-artist' element={<AddArtist />} />
        <Route path={'/artist'}>
          <Route path=":id" element={<AddArtist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
