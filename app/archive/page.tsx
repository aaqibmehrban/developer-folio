import Link from "next/link";
import Footer from "@/components/Footer";
import { archivedProjects, metaData } from "@/data/contentConfig";

export const metadata = {
  title: `Project Archive — ${metaData.title}`,
  description: "A complete archive of projects, research and experiments.",
};

export default function ArchivePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-custom-gradient">
      <main className="flex-grow container mx-auto p-4 md:p-8 max-w-5xl">
        <Link href="/" className="text-[#2eb0cb] hover:text-white transition duration-300">
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Project Archive</h1>
        <p className="text-gray-400 mt-2 max-w-2xl">
          A complete list of everything I&apos;ve shipped, researched, or built along the way —
          {" "}{archivedProjects.length} projects and counting.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-xs md:text-sm uppercase tracking-wider border-b border-gray-700">
                <th className="py-3 pr-4 font-medium">Year</th>
                <th className="py-3 pr-4 font-medium">Title</th>
                <th className="py-3 pr-4 font-medium hidden md:table-cell">Made at</th>
                <th className="py-3 pr-4 font-medium hidden md:table-cell">Built with</th>
                <th className="py-3 pr-0 font-medium text-right">Link</th>
              </tr>
            </thead>
            <tbody>
              {archivedProjects.map((project) => (
                <tr
                  key={project.slug}
                  className="border-b border-gray-800 hover:bg-[#122B39] transition-colors duration-200 group"
                >
                  <td className="py-4 pr-4 text-gray-400 whitespace-nowrap align-top">{project.year}</td>
                  <td className="py-4 pr-4 align-top">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-white font-medium group-hover:text-[#2eb0cb] transition-colors"
                    >
                      {project.title}
                    </Link>
                    <p className="text-gray-500 text-sm mt-1 md:hidden">{project.madeAt}</p>
                  </td>
                  <td className="py-4 pr-4 text-gray-400 hidden md:table-cell align-top whitespace-nowrap">
                    {project.madeAt}
                  </td>
                  <td className="py-4 pr-4 text-gray-400 hidden md:table-cell align-top">
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pr-0 align-top text-right">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#2eb0cb] transition-colors"
                        aria-label={`Open external link for ${project.title}`}
                      >
                        ↗
                      </a>
                    ) : (
                      <span className="text-gray-700">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
