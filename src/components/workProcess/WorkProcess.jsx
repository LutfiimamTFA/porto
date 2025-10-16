import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Requirement Analysis",
    description:
      "Gathering user requirements and designing multi-user login modules with role-based access for web projects.",
    svgPath: "M21 18h-10v2h10v-2zm0-5h-8v2h8v-2zm6-8h-4v-1c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3h-12c-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8v1h-4c-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8v20c0 .3.1.6.3.8.2.2.5.3.8.3h20c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8v-20c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3zm-1 20h-16v-16h16v16z",
  },
  {
    id: 2,
    title: "Database Design",
    description:
      "Designing secure MySQL database structures that support transactions and modules for incoming and outgoing goods.",
    svgPath: "M9 21h6v-2h-6v2zm0-5h10v-2h-10v2zm0-5h12v-2h-12v2zm15-4h-14v-2h14v2zm-14 20h14v-2h-14v2z",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Developing web applications using PHP, Laravel, and Git, and building financial transaction tracking systems for community RTs with PHP Native.",
    svgPath: "M29 10l-6-6-11 11-6-6-6 6v14h14l6-6 6 6 6-6v-14z",
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description:
      "Testing modules and features to ensure they meet user requirements, then deploying web applications for production use.",
    svgPath: "M28 19h-2v-10h-4v-2h-16v20h16v-2h4v-6z",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Each project starts with requirement analysis and continues through full implementation. My focus is to create web applications that are secure, functional, and user-friendly.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {workStepData.map((data, index) => (
          <WorkSteps
            data={data}
            style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
              index % 2 === 1 ? "xs:ms-3 xs:mt-6" : "xs:mb-6"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
