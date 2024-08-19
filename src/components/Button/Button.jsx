import './Button.scss';
import { Icon } from '../Icon/Icon';

export const Button = ({prefixSrc, suffixSrc, onButtonClicked, children}) => {
    return (
        <button className='button' onClick={onButtonClicked}>
            <Icon iconSrc={prefixSrc} />
            {children}
            <Icon iconSrc={suffixSrc} />
        </button>
    )
}