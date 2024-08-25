import { VideoCard } from "../VideoCard/VideoCard";
import './NextVideos.scss';

export const NextVideos = ({videos, currentVideo, onVideoChange}) => {

    return(
        <div className="next-videos">
            <h3>NEXT VIDEOS</h3>
            {videos.map((video, index) => {
                return video.id !== currentVideo.id && <VideoCard key={index} video={video} onVideoClick={onVideoChange} />
            })}
        </div>
    );
}