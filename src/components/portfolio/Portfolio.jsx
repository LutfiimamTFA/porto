const timelineData = [
  {
    id: 1,
    title: "Academic Project – Village Financial Web App",
    period: "Sept 2023 – Dec 2023",
    description: `Worked as System Analyst & Web Developer. Contributed to developing a web-based financial transaction system for the village RT using PHP Native. Designed role-based login modules, built income and expense tracking systems, and presented the project to the local RT head as a solution for digital record-keeping.`,
    position: "left",
  },
  {
    id: 2,
    title: "MSIB Full Stack Web Developer – Goods Procurement Web App",
    period: "Feb 2024 – Jul 2024",
    description: `Contributed as Full Stack Web Developer. Developed a Laravel-based web application for the Blitar Livestock and Fisheries Department to manage goods procurement. Designed multi-user login using Laravel Guards, created modules for incoming-outgoing transactions, procurement history, and recipient information, and structured a secure MySQL database. Collaborated in an Agile team using Git for version control.`,
    position: "right",
  },
];

const PortfolioTimeline = () => {
  return (
    <div className="content py-10 px-4 max-w-5xl mx-auto" id="portfolio">
      <p className="section-title text-center">My Experience</p>
      <div className="relative mt-10">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`mb-10 w-full flex flex-col md:flex-row items-center ${
              item.position === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="w-full md:w-1/2 relative px-2 md:px-4">
              {/* Circle in the middle */}
              <span className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full border-2 border-white z-10"></span>

              <div
                className={`bg-white p-6 rounded-lg shadow-md ${
                  item.position === "left" ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <p className="text-sm text-gray-400">{item.period}</p>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTimeline;
