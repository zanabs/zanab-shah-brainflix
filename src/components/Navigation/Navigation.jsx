import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import './Navigation.scss'

export const Navigation = (props) => {
    const {userImage} = props;

    const [clickCount, setClickCount] = useState(0);

    const onClickButton = () => {
        setClickCount(clickCount + 1);
    }
    
    if(clickCount > 10) {
        console.log('greater than 10');
    }
    
    return (
        <section className='navigation'>
            {clickCount}
            <img className='navigation__logo' src='src/assets/images/BrainFlix-logo.svg' alt='logo'/>
            <div className='navigation__search-bar'>
                <div className='navigation__search-bar-field'>
                    <img className='navigation__search-bar-icon' src={'src/assets/images/icons/search.svg'} />
                    <input placeholder='Search' />
                </div>                
                <Avatar userImageSrc={'src/assets/images/Mohan-muruge.jpg'} />
            </div>
            <Button prefixSrc={'src/assets/images/icons/upload.svg'} onButtonClicked={onClickButton}>Upload</Button>
        </section>
    );
}