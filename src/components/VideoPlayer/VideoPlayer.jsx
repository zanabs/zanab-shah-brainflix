import { Comments } from '../Comments/Comments';
import { Icon } from '../Icon/Icon';
import { NextVideos } from '../NextVideos/NextVideos';
import './VideoPlayer.scss';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../utils';
import axios from 'axios';


export const VideoPlayer = () => {

    const [videos, setVideos] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null)
   

    useEffect(() => {
     const fetchVideos = async () => {
       const response = await axios.get(
         'https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key='+API_KEY
       );
       setVideos(response.data);
       setCurrentVideo(response.data[0]);
     };
     fetchVideos();
    },[])

    // useEffect(() => {
    //     console.log(videos)
    //     setCurrentVideo(videos[0]);
    //    },[videos])


  
  
    const onVideoChange = (video) => {
      setCurrentVideo(video);
    }

    

    const getDate = () => {
        return new Date(currentVideo.timestamp).toDateString();
    }

    return (
        <>
        {currentVideo && <div className='video-player'>
            <video className='video-player__player' controls poster={currentVideo.image} src={currentVideo.video} type="video/mp4" />
            <h1>{currentVideo.title}</h1>
            <hr />
            <div className='video-player__details'>
                <div className='video-player__details-info'>
                    <div className='video-player__details-text'>
                        <p className='video-player__details-channel'>By {currentVideo.channel}</p>
                    </div>
                    <div className='video-player__details-text'>
                        <p>{getDate()}</p>
                    </div>
                    
                </div>
                <div className='video-player__details-stats'>
                    <div className='video-player__details-text video-player__details-text--icon'>
                        <Icon iconSrc='src/assets/images/icons/views.svg'/><p>{currentVideo.views}</p>
                    </div>
                    <div className='video-player__details-text video-player__details-text--icon'>
                        <Icon iconSrc='src/assets/images/icons/likes.svg'/><p>{currentVideo.likes}</p>
                    </div>
                </div>
            </div>
            <hr />
            <p>{currentVideo.description}</p>
            <div className='video-player__comments-next-videos'>
                <Comments videoId={currentVideo.id} />
                <NextVideos videos={videos} currentVideo={currentVideo} onVideoChange={onVideoChange}  />
            </div>
        </div>
        }
        </>
    )
}