import { Avatar } from "../Avatar/Avatar";
import './Comment.scss';

export const Comment = ({comment}) => {
    const getDate = () => {
        return new Date(comment.timestamp).toDateString();
    }

    return (
        <div className="comment">
            <Avatar />
            <div className="comment__body">
                <div className="comment__name-date">
                    <p className="comment__name">{comment.name}</p>
                    <p className="comment__date">{getDate()}</p>
                </div>
                <p>{comment.comment}</p>
            </div>
        </div>
    );
}