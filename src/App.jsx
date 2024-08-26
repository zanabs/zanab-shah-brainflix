
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Upload } from './components/Upload/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'





function App() {


  

  return (
    <>
        <BrowserRouter>
          <Navigation />
            <div id="app__border">
              <hr></hr>
            </div>
            <div id="app__body">
            <Routes>
              <Route path="/" element={<VideoPlayer /> }/>
              <Route path="/upload" element={<Upload />}/>
              <Route path="/video/:videoId" element={<VideoPlayer />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
