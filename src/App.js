import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import StudyingPage from "./pages/StudyingPage";
import TrainPage from "./pages/TrainPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
        <Link to='/' className="home-button-link"><i className="material-icons home-button">home</i></Link>
          <main className="page">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/studying" element={<StudyingPage />} />
              <Route path="/training" element={<TrainPage />} />
              <Route path="/playing" element={<GamePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
