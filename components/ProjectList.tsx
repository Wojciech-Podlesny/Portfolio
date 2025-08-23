
import { ProjectCard } from "@/components/ProjectsCard";
import {Project} from "@/types/projects";


interface ProjectsListProps {
    projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 max-w-7xl mx-auto">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};
