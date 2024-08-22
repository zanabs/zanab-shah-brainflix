import { useEffect, useState } from 'react'
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { Upload } from './components/Upload'
import jsonData from '../src/data/video-details.json'




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
      

    </>
  )

}

export default App
