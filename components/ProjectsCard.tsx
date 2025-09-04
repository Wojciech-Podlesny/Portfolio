"use client";

import * as React from "react";
import { Dialog } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/types/projects";
import { ClickableCard } from "@/components/ClickableCard";

type Props = Project & { index?: number };

export const ProjectCard: React.FC<Props> = (props) => {
    return (
        <Dialog>
            <ClickableCard {...props} />
            <ProjectModal {...props} />
        </Dialog>
    );
};