import Image from "next/image";
import { MonitorUp } from "lucide-react";

const ProjectCover = ({
  project,
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw",
}) => {
  if (project.coverMode === "online") {
    return (
      <div
        role="img"
        aria-label={`${project.title} - ${project.deliveryModeLabel}`}
        className="absolute inset-0 flex flex-col items-center justify-center bg-brand-blue px-6 text-center text-white dark:bg-[#172334]"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-brand-orange/40 bg-brand-orange/15 text-brand-orange">
          <MonitorUp className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-display font-700 uppercase text-white/65">
          SBK
        </p>
        <p className="mt-1 text-lg font-display font-800">
          {project.deliveryModeLabel}
        </p>
        <p className="mt-1 text-sm font-body text-white/70">{project.software}</p>
      </div>
    );
  }

  if (!project.coverImage) return null;

  return (
    <Image
      src={project.coverImage}
      alt={project.title}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${imageClassName}`}
    />
  );
};

export default ProjectCover;
