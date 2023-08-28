import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const history = useHistory();

  const handleClick = () => {
    deleteDocument(project.id);
    history.push("/");
  };

  return (
    <div>
      <div className='project-summary'>
        <h2 className='page-title'>{project.name}</h2>
        <p>created By {project.createdBy.displayName}</p>
        <p className='due-date'>
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className='details'>{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className='assigned-users'>
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
        <button className='btn' onClick={handleClick}>
          Mark as complete
        </button>
      )}
    </div>
  );
}
