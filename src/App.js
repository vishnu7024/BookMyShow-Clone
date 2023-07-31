import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Header2 from './components/header2/Header2';
import Home from './pages/home/home';
import MovieList from './components/MovieList/movieList';
// import Login from './components/Login';



// import Cards from './components/card/card';

function App() {

  return (
  
    <div>
    <Router>
      <Header />
      <Header2 />
      <Routes>
        <Route index element={<Home />}></Route>
        {/* <Route path='Home' element ={<Home />}></Route> */}
        <Route path="movie/:id" element={<moviedetail />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="movieSeat/:SeatBooking" element={<h1>hello</h1>}></Route>
        <Route path="movieSearch/:Search" element={<h1>hello2</h1>}></Route>
        <Route path="/*" element={<h1>Error page</h1>}></Route>
      </Routes>
    </Router>
    </div>
  
  );
}

export default App
