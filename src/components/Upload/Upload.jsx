
import { Button } from '../Button/Button';
import './UploadVideo.scss'

export const Upload = () => {
    return (
       
        <>
            <div className="upload-video">
                <h1 className="upload-video__title">Upload Video
                </h1>
                <p className="upload-video__label">VIDEO THUMBNAIL
                </p>
                <img className="upload-video__preview" src="src/assets/images/Upload-video-preview.jpg"></img>
                <p className="upload-video__label">TITLE YOUR VIDEO
                </p>
                <textarea placeholder='Add a title to your video' className='upload-video__title-input'>
                </textarea>
                <p className="upload-video__label">ADD A DESCRIPTION
                </p>
                <textarea placeholder='Add a description for your video' className='upload-video__description-input'>
                </textarea>
                <Button prefixSrc={'src/assets/images/icons/upload.svg'}>PUBLISH</Button>

            </div>
        </>

       
        
    );
}