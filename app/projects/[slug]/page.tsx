import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectThumb from "@/components/ProjectThumb";
import { archivedProjects, getProjectBySlug, metaData } from "@/data/contentConfig";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return archivedProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  return {
    title: project ? `${project.title} — ${metaData.title}` : `Project — ${metaData.title}`,
    description: project?.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-custom-gradient">
      <main className="flex-grow container mx-auto p-4 md:p-8 max-w-3xl">
        <Link href="/archive" className="text-[#2eb0cb] hover:text-white transition duration-300">
          ← Back to archive
        </Link>

        <div className="mt-6">
          <p className="text-gray-400">{project.dateRange} · {project.madeAt}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{project.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
            >
              {project.urlLabel ?? "View Project"} ↗
            </a>
          )}
        </div>

        <div className="mt-8">
          <ProjectThumb
            image={project.image}
            title={project.title}
            className="rounded-xl shadow-lg w-full max-h-[420px] min-h-[220px] object-cover"
          />
        </div>

        <div className="mt-8 space-y-4 text-gray-300 leading-relaxed">
          {project.fullDescription.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-3">Highlights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {project.stars && <p className="mt-8 text-gray-300">⭐ {project.stars} stars on GitHub</p>}
      </main>
      <Footer />
    </div>
  );
}
