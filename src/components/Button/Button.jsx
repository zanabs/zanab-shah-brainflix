import { useState } from 'react';
import './Button.scss';

export const Button = ({prefixSrc, suffixSrc, onButtonClicked, children}) => {
    return (
        <button className='button' onClick={onButtonClicked}>
            <div className='button__prefix-icon'>
                {prefixSrc && <img src={prefixSrc} />}
            </div>
            {children}
            <div className='button__suffix-icon'>
                {suffixSrc && <img src={suffixSrc} />}
            </div>
        </button>
    )
}