import './Button.scss';
import { Icon } from '../Icon/Icon';

export const Button = ({prefixSrc, suffixSrc, onClick, children}) => {
    return (
        <button className='button' onClick={onClick}>
            <Icon iconSrc={prefixSrc} />
            {children}
            <Icon iconSrc={suffixSrc} />
        </button>
    )
}
