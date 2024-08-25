import { Comments } from '../Comments/Comments';
import { Icon } from '../Icon/Icon';
import { NextVideos } from '../NextVideos/NextVideos';
import './VideoPlayer.scss';
import { useEffect, useState } from 'react';



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

    const onVideoChange = (video) => {
      setCurrentVideo(video);
    }

    const {title, channel, image, description, views, likes, video, timestamp, comments} = currentVideo;

    const getDate = () => {
        return new Date(timestamp).toDateString();
    }

    return (
        <div className='video-player'>
            <video className='video-player__player' controls poster={image} src={video} type="video/mp4" />
            <h1>{title}</h1>
            <hr />
            <div className='video-player__details'>
                <div className='video-player__details-info'>
                    <div className='video-player__details-text'>
                        <p className='video-player__details-channel'>By {channel}</p>
                    </div>
                    <div className='video-player__details-text'>
                        <p>{getDate()}</p>
                    </div>
                    
                </div>
                <div className='video-player__details-stats'>
                    <div className='video-player__details-text video-player__details-text--icon'>
                        <Icon iconSrc='src/assets/images/icons/views.svg'/><p>{views}</p>
                    </div>
                    <div className='video-player__details-text video-player__details-text--icon'>
                        <Icon iconSrc='src/assets/images/icons/likes.svg'/><p>{likes}</p>
                    </div>
                </div>
            </div>
            <hr />
            <p>{description}</p>
            <div className='video-player__comments-next-videos'>
                <Comments comments={comments} />
                <NextVideos videos={videos} currentVideo={currentVideo} onVideoChange={onVideoChange}  />
            </div>
        </div>
    )
}