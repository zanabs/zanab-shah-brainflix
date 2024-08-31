import axios from "axios";
import { Avatar } from "../Avatar/Avatar";

import './Comment.scss';
import { API_URL } from "../../utils";
import { Button } from "../Button/Button";

export const Comment = ({comment, updateCommentsList, videoId}) => {
    const getDate = () => {
        return new Date(comment.timestamp).toDateString();
    }

    const whenDeleteButtonClicked = async () => {
        try {
            await axios.delete(`${API_URL}/videos/${videoId}/comments/${comment.id}`);
            updateCommentsList();
            
        } catch(error) {
            console.log("comment doesn't exist", error)
            
        }
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
                <div className="comment__delete">
                    <Button onClick={whenDeleteButtonClicked}>DELETE COMMENT</Button>
                </div>
            </div>
        </div>
    );
}