import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UploadVideo.scss'
import { Button } from '../Button/Button';


export const Upload = () => {
        const [publishButtonClicked, setPublishButtonClicked] = useState(false);
        const navigateHome = useNavigate(); 

        const whenSubmitted = (event) => {
            event.preventDefault();
            setPublishButtonClicked(true);
        

        setTimeout(() => {
            navigateHome('/'); 
        }, 2000);
        
    }
        return (
            <>
                <div className="upload-video">
                    <h1 className="upload-video__title">Upload Video
                    </h1>
                    <p className="upload-video__label">VIDEO THUMBNAIL
                    </p>
                    <img className="upload-video__preview" src="src/assets/images/Upload-video-preview.jpg"></img>
                    
                    <div>
                        <form onSubmit={whenSubmitted} className="upload-video__form">
                            <p className="upload-video__label">TITLE YOUR VIDEO
                            </p>
                            <textarea placeholder='Add a title to your video' className='upload-video__title-input'>
                            </textarea>
                            <p className="upload-video__label">ADD A DESCRIPTION
                            </p>
                            <textarea placeholder='Add a description for your video' className='upload-video__description-input'>
                            </textarea>
                            <Button type="submit" prefixSrc={'/src/assets/images/icons/upload.svg'}>PUBLISH</Button>  
                            {publishButtonClicked && <h1>Thank you for your submission! Redirecting to homepage...</h1> }
                            <p className="upload-video__cancel">CANCEL</p>
                        </form>
                    
                    </div>
                </div>
            </>
        );


}