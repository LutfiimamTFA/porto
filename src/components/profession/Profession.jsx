const rolesData = [
  {
    id: 1,
    title: "Back-end Development",
    description:
      "Build robust and scalable web applications using PHP and Laravel with clean architecture.",
    icon: "🖥️",
  },
  {
    id: 2,
    title: "Database Management",
    description:
      "Design and manage MySQL databases, optimize queries, and ensure data integrity.",
    icon: "🗄️",
  },
  {
    id: 3,
    title: "API & Integration",
    description:
      "Integrate back-end services with front-end interfaces and implement APIs for seamless communication.",
    icon: "🔗",
  },
];

const Profession = () => {
  return (
    <div className="py-10 px-4" id="services">
      <div className="flex flex-wrap justify-center gap-8">
        {rolesData.map((role) => (
          <div
            key={role.id}
            className="flex flex-col items-center w-64 p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{role.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-center">{role.title}</h3>
            <p className="text-gray-500 text-sm text-center">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profession;
