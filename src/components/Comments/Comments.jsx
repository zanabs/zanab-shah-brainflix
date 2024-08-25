
import { AddComment } from '../AddComment/AddComment';
import { Comment } from '../Comment/Comment';
import './Comments.scss';


export const Comments = ({videoId}) => {
    
    return (
        <div className="comments">
            <h2>{comments.length} Comments</h2>
            <AddComment userImageSrc={'src/assets/images/Mohan-muruge.jpg'} />
            <hr />
            {comments.length && comments.map((comment, index) => (
                <div key={index}>
                    <Comment comment={comment} />
                    <hr />
                </div>
            ))}
        </div>
    )
}