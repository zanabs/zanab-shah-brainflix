
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { VideoDetails } from './pages/VideoDetails/VideoDetails'
import { UploadVideo } from './pages/UploadVideo/UploadVideo'

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
              <Route path="/" element={<VideoDetails /> }/>
              <Route path="/upload" element={<UploadVideo />}/>
              <Route path="/video/:videoId" element={<VideoDetails />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
