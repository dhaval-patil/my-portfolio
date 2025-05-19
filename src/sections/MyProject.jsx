import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const MyProject = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-[#020024] via-[#040451] via-35% via-[#000548] via-54% to-[#01002a] to-100% mt-14 rounded-t-4xl"
    >
      <div className="container mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="font-text text-center text-[10vh]">Recent Projects</h4>

          <p className="text-2xl font-text text-zinc-300 text-center mt-4 leading-6">
            From concept to deployment, these projects showcase my technical
            expertise. I focus on clean code, performance, and user experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden ">
            <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 mt-17 ">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] m-2 sm:min-w-[50%] group hover:scale-103 duration-300 lg:min-w-[33%]"
                >
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags}
                    github={project.github}
                    live={project.live}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
