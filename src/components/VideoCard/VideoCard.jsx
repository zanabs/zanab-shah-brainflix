import './VideoCard.scss';

export const VideoCard = ({video, onVideoClick}) => {
    const onVideoCardClick = () => {
        onVideoClick(video);
    }
    return (
        <div className="video-card" onClick={onVideoCardClick}>
            <div className='video-card__image'>
                <img src={video.image} />
            </div>
            
            <div className='video-card__info'>
                <p className='video-card__info-title'>{video.title}</p>
                <p>{video.channel}</p>
            </div>
       </div>
    )
}