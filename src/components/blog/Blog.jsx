import { useState } from "react";

// Placeholder images
import img1 from "../../assets/images/blog/RT.png";
import img2 from "../../assets/images/blog/dinas.png";
import img3 from "../../assets/images/blog/ta.png";
import img4 from "../../assets/images/blog/bnsp.png";
import img5 from "../../assets/images/blog/porto.png";

const projectData = [
  
  {
    id: 1,
    title: "Academic Project – Village Financial Web App",
    period: "Sept 2023 – Dec 2023",
    shortDesc: "Web-based financial system for village RT using PHP Native.",
    description: `Worked as System Analyst & Web Developer. Developed a web-based financial transaction system for village RTs using PHP Native. Designed role-based login modules, built income and expense tracking, and presented the project to the local RT head.`,
    tools: ["PHP Native", "MySQL", "HTML", "CSS", "JavaScript",],
    image: img1,
  },
  {
    id: 2,
    title: "MSIB Full Stack Web Developer – Goods Procurement Web App",
    period: "Feb 2024 – Jul 2024",
    shortDesc: "Laravel-based procurement system for Blitar Livestock & Fisheries Dept.",
    description: `Developed a Laravel-based web app to manage goods procurement. Designed multi-user login, modules for incoming-outgoing transactions, procurement history, recipient info, and structured secure MySQL DB.`,
    tools: ["Laravel", "MySQL", "Git", "HTML", "CSS", "JavaScript"],
    image: img2,
  },
  {
    id: 3,
    title: "Forward Chaining System – Puskeswan",
    period: "2024",
    shortDesc: "Implemented decision-support system using forward chaining in Laravel.",
    description: `Implemented a forward chaining system using Laravel for Puskeswan to automate decision-making workflows.`,
    tools: ["Laravel", "PHP", "MySQL", "HTML", "CSS","Forward Chaining"],
    image: img3,
  },
  {
    id: 4,
    title: "BNSP Certification – Junior Web Developer Project",
    period: "2024",
    shortDesc: "Built simple office management system as part of certification.",
    description: `Built a simple office management system for BNSP Junior Web Developer certification, demonstrating CRUD, authentication, and reporting.`,
    tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: img4,
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    period: "2025",
    shortDesc: "Developed my own portfolio website to showcase projects and skills.",
    description: `Designed and developed a personal portfolio website using React, TailwindCSS, and modern front-end techniques. Implemented project showcases, timeline, skills charts, and responsive design for all devices.`,
    tools: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS", "SwiperJS"],
    image: img5,
  },
];

const PortfolioBlog = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="content py-20 px-2 max-w-6xl mx-auto" id="projects">
      <p className="section-title text-center mb-10">Projects</p>

      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{project.period}</p>
              <p className="text-gray-500 mt-2">{project.shortDesc}</p>
              <button
                className="mt-4 text-purple-600 font-semibold hover:underline"
                onClick={() => setSelectedProject(project)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full relative p-6 shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{selectedProject.period}</p>
            <p className="text-gray-500 mt-4">{selectedProject.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioBlog;
