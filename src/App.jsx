
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Upload } from './components/Upload/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'





function App() {


  

  return (
    <>
    <Navigation />
      <div id="app__border">
        <hr></hr>
      </div>
      <div id="app__body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VideoPlayer /> }/>
            <Route path="/upload" element={<Upload />}/>
            <Route path="/video/:videoId" element={<VideoPlayer />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
