
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './components/HomePage/home'
import { Upload } from './components/Upload/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'





function App() {


  

  return (
    <>
    <Navigation /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/video/:videoId" element={<VideoPlayer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
