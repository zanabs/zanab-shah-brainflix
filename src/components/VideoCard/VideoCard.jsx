import './VideoCard.scss';


export const VideoCard = ({video, onVideoClick}) => {
    const onVideoCardClick = () => {
        onVideoClick(video);
    };
    return (
        <div className="video-card" onClick={onVideoCardClick}>
          <div className="video-card__image">
            {video.image && <img src={video.image} alt={`cover image for ${video.title}`}/>}
          </div>
          <div className="video-card__info">
            <p className="video-card__info-title">{video.title}</p>
            <p>{video.channel}</p>
          </div>
        </div>
      );
    };