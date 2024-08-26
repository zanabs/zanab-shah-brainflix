import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UploadVideo.scss'
import { Button } from '../../components/Button/Button';


export const UploadVideo = () => {
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
                    <div className='upload-video__title'>
                        <h1>Upload Video</h1>
                    </div>
                    <p className="upload-video__label">VIDEO THUMBNAIL
                    </p>

                    
                    <div>
                        
                        <form onSubmit={whenSubmitted} className='upload-video__form'>
                            <img className="upload-video__preview" src="src/assets/images/Upload-video-preview.jpg"></img>

                            <div className='upload-video__preview-form-fields'>
                                <div className='upload-video__form-fields'>
                                    <p className="upload-video__label">TITLE YOUR VIDEO
                                    </p>
                                    <textarea required placeholder='Add a title to your video' className='upload-video__title-input'>
                                    </textarea>
                                    <p className="upload-video__label">ADD A DESCRIPTION
                                    </p>
                                    <textarea required placeholder='Add a description for your video' className='upload-video__description-input'>
                                    </textarea>
                                </div>
                            </div>
                            <div className= "upload-video__form-buttons-section">
                                <div className='upload-video__form-buttons'>
                                    <div>
                                        
                                        <Button type="submit" prefixSrc={'src/assets/images/icons/upload.svg'}>PUBLISH</Button>  
                                    </div>
                                    <p className="upload-video__cancel">CANCEL</p>
                                </div>
                            </div>
                            <div className='upload-video__submit-validation'>
                            {publishButtonClicked && <h2>Thank you for your submission! Redirecting to homepage...</h2> }
                            </div>
                        </form>
                    
                    </div>
                </div>
            </>
        );


}