import React from "react";

type ProjectThumbProps = {
  image?: string;
  title: string;
  className?: string;
};

const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter((word) => /[a-zA-Z0-9]/.test(word[0]))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const ProjectThumb: React.FC<ProjectThumbProps> = ({ image, title, className }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className={className ?? "rounded-lg shadow-md w-full h-full object-cover"}
      />
    );
  }

  return (
    <div
      className={
        className
          ? `${className} flex items-center justify-center bg-gradient-to-br from-[#122B39] to-[#0C0E23] text-[#2eb0cb] text-3xl font-bold`
          : "rounded-lg shadow-md w-full h-full min-h-[140px] flex items-center justify-center bg-gradient-to-br from-[#122B39] to-[#0C0E23] text-[#2eb0cb] text-3xl font-bold"
      }
    >
      {initials(title)}
    </div>
  );
};

export default ProjectThumb;
