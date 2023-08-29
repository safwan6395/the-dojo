import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents?.filter((d) => {
    switch (currentFilter) {
      case "all":
        return true;

      case "mine":
        return d.assignedUsersList.some((u) => u.id === user.uid);

      case "design":
      case "development":
      case "marketing":
      case "sales":
        return currentFilter === d.category;

      default:
        return true;
    }
  });

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}
