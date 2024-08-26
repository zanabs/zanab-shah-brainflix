import { useNavigate } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import './Navigation.scss'

export const Navigation = () => {

    
    const navigate = useNavigate(); 

        
    return (
        <section className='navigation'>
            <div className='navigation__logo'>
                <img onClick={() => navigate('/')} src='/src/assets/images/BrainFlix-logo.svg' alt='logo'/>
            </div>
            <div className='navigation__search-bar-button'>
                <div className='navigation__search-bar'>
                    <div className='navigation__search-bar-field'>
                        <input placeholder='Search' />
                    </div>                
                    <div className='navigation__avatar'>
                        <Avatar userImageSrc={'/src/assets/images/Mohan-muruge.jpg'} />
                    </div>
                </div>
                <Button onClick={() => navigate('/upload')} prefixSrc={'/src/assets/images/icons/upload.svg'}>Upload</Button>
                <div className='navigation__avatar navigation__avatar--tablet'>
                    <Avatar userImageSrc={'../../src/assets/images/Mohan-muruge.jpg'} />
                </div>
            </div>
        
        </section>
    );
}