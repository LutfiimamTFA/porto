const skillsData = [
  { skill: "HTML & CSS", level: 95 },
  { skill: "JavaScript", level: 90 },
  { skill: "React.js", level: 85 },
  { skill: "Laravel", level: 80 },
  { skill: "MySQL", level: 85 },
  { skill: "Git & Version Control", level: 90 },
];

const SkillsExpertise = () => {
  return (
    <div className="py-25 max-w-5xl mx-auto px-4" id="skills">
      <div className="text-center mb-12">
        <p className="text-white md:font-semibold text-3xl sm:text-4xl md:text-5xl pb-4">
          Skills & Expertise
        </p>
        <p className="text-[#A5ACB5] text-sm sm:text-lg font-normal text-center">
          Here are some of my core technical skills and expertise levels in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <p className="text-white font-semibold mb-2">{item.skill}</p>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-xs mt-1">{item.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExpertise;
