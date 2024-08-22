import { useEffect, useState } from 'react'
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import jsonData from '../src/data/video-details.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  const [videos, setVideos] = useState(jsonData);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    setVideos(jsonData);
    console.log(jsonData);
    setCurrentVideo(jsonData[0]);
  }, []);

  const onVideoChange = (video) => {
    setCurrentVideo(video);
  }

  return (
    <>
      <Navigation />
      {currentVideo && <VideoPlayer videoData={currentVideo} onVideoChange={onVideoChange} videos={videos}/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
          </Route>
        </Routes>
    </BrowserRouter>

    </>
  )

}

export default App
