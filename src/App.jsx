
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Upload } from './components/Upload/Upload'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {

 

  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoPlayer /> }/>
          <Route path="/upload" element={<Upload />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
