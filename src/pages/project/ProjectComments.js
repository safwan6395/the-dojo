import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";

export default function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const { updateDocument, response } = useFirestore("projects");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newComment.trim().length < 1) {
      return;
    }

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className='project-comments'>
      <h4>Project Comments</h4>

      <ul>
        {project.comments.length > 0 &&
          project.comments.map((cmnt) => (
            <li key={cmnt.id}>
              <div className='comment-author'>
                <Avatar src={cmnt.photoURL} />
                <p>{cmnt.displayName}</p>
              </div>
              <div className='comment-date'>
                <p>
                  {formatDistanceToNow(cmnt.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className='comment-content'>
                <p>{cmnt.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className='add-comment' onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className='btn'>Add comment</button>
      </form>
    </div>
  );
}
