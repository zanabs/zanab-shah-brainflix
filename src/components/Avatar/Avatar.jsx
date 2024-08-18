import './Avatar.scss';

export const Avatar = ({userImageSrc}) => {
    return (
        <div className='avatar'>
            {userImageSrc && <img src={userImageSrc} />}
        </div>        
    )
}