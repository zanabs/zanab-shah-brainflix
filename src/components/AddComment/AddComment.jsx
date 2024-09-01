import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import axios from 'axios';
import './AddComment.scss';
import { useState } from 'react';

import { API_URL } from '../../utils';

export const AddComment = ({userImageSrc, videoId, updateCommentsList}) => {

    const [newComment, setNewComment] = useState('');
        
    const whenCommentButtonClicked = async (event) => {
        event.preventDefault();

        try{
            await axios.post(`${API_URL}/videos/${videoId}/comments`, {
                comment: newComment,
            
            }); 

            updateCommentsList();
            setNewComment('');
        }catch(error) {
            console.error('Sorry, we could not post your comment at this time:', error);
        }
    };

    return (
        <form onSubmit={whenCommentButtonClicked} className='add-comment'>
            <Avatar userImageSrc={userImageSrc} />
            <div className='add-comment__conversation'>
                <h3>JOIN THE CONVERSATION</h3>
                <div className='add-comment__field'>
                    <textarea required value={newComment} onChange={(event)=> setNewComment(event.target.value)}
                    placeholder='Add a new comment' className='add-comment__input'></textarea>
                    <Button type="submit" prefixSrc={'/src/assets/images/icons/add_comment.svg'}>COMMENT</Button>
                </div>
            </div>
        </form>
    )

}