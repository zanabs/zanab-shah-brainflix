import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import './AddComment.scss';

export const AddComment = ({userImageSrc}) => {
    return (
        <div className='add-comment'>
            <Avatar userImageSrc={userImageSrc} />
            <div className='add-comment__conversation'>
                <h3>JOIN THE CONVERSATION</h3>
                <div className='add-comment__field'>
                    <textarea placeholder='Add a new comment' className='add-comment__input'></textarea>
                    <Button prefixSrc={'src/assets/images/icons/add_comment.svg'}>COMMENT</Button>
                </div>
            </div>
        </div>
    )
}