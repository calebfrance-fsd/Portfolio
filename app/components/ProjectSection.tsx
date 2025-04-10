import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { project } from "@/data/project";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-5xl font-bold text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.map((item) => (
            <Link 
              href={item.link} 
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70">
                <CardContent className="p-4">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
