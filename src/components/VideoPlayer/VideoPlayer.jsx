import { Comments } from '../Comments/Comments';
import { Icon } from '../Icon/Icon';
import { NextVideos } from '../NextVideos/NextVideos';
import './VideoPlayer.scss';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../utils';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


export const VideoPlayer = () => {

    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { videoId } = useParams();
    const navigatePage = useNavigate();

    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await axios.get(`${API_URL}/videos${API_KEY}`);            
                if (response.data.length > 0) {
                    setVideos(response.data);
                } else {
                    alert("no videos to display");
                }
            } catch (error) {
                console.error('we are not able to retrieve the requested videos:', error);
            }
        };

        getVideos();
    }, [])

    const getCurrentVideo = async () => {
        console.log('useEffect getCurrentVideo')
        if (videoId) {                
            try {
                const response = await axios.get(`${API_URL}/videos/${videoId}${API_KEY}`);
                setCurrentVideo(response.data);
            } catch (error) {
                console.error(`ERROR. Cannot retrieve video from this id:${videoId}`, error);
            }
        } else if(videos.length) {
            navigatePage('/video/'+videos[0].id);
        }
    }

    useEffect(() => {
        getCurrentVideo();
        
    }, [videos, videoId]);

    const clickThumbnail = (video) => {
        navigatePage(`/video/${video.id}`);
    };

    const getDate = () => {
        return currentVideo ? new Date(currentVideo.timestamp).toDateString() : '';
    };

    return (
        <>
            {currentVideo && (
                <div className='video-player'>
                    <video
                        className='video-player__player'
                        controls
                        poster={currentVideo.image}
                        src={currentVideo.video}
                        type="video/mp4"
                    />
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
                                <Icon iconSrc='/src/assets/images/icons/views.svg' />
                                <p>{currentVideo.views}</p>
                            </div>
                            <div className='video-player__details-text video-player__details-text--icon'>
                                <Icon iconSrc='/src/assets/images/icons/likes.svg' />
                                <p>{currentVideo.likes}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>{currentVideo.description}</p>
                    <div className='video-player__comments-next-videos'>
                        {currentVideo.comments && (
                            <Comments comments={currentVideo.comments} videoId={currentVideo.id} updateCommentsList={() => getCurrentVideo()} />
                        )}
                        <NextVideos videos={videos} currentVideo={currentVideo} onVideoChange={clickThumbnail} />
                    </div>
                </div>
            )}
        </>
    );
};
