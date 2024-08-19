import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Comment } from './components/Comment/Comment'
import { AddComment } from './components/AddComment/AddComment'
import { VideoCard } from './components/VideoCard/VideoCard'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { NextVideos } from './components/NextVideos/NextVideos'

function App() {

  const [videos, setVideos] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetch('src/data/video-details.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVideos(data)
        setCurrentVideo(data[0]);
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
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
