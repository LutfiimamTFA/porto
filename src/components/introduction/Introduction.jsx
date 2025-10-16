import person from "../../assets/images/foto mas lupi.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  { id: 1, title: "Experience", description: "1 Y." },
  { id: 2, title: "Projects Completed", description: "5+" },
  { id: 3, title: "Happy Clients", description: "2" },
];

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-28 lg:mb-28 gap-6 p-4"
    >
      {/* Left Section: Text & Summary */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 w-full lg:w-auto transition-all duration-500">
          {/* Hello, Name */}
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-white bg-clip-text text-transparent animate-shine">
              Lutfi Imam Tauchid Faried Akbar
            </span>
          </p>

          {/* Description */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-700">
            I'm a <span className="bg-highlight">Junior Web Developer</span> based in Semarang, Indonesia.  
            I build modern and user-friendly web applications using PHP, MySQL, Laravel, JavaScript, HTML, CSS, and Git, combining clean code with user-centric design.
          </p>

          {/* Say Hello Button */}
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=lutfiimam81@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>

        {/* Information Summary */}
        <div className="mx-auto lg:mx-0 relative mt-10">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Photo + Skill Bubbles di luar foto */}
      <div className="max-w-150 w-full h-full max-lg:mx-auto relative flex justify-center items-center">
        {/* Foto Profil */}
        <img
          className="shadow-2xl shadow-gray-300 w-full max-h-[600px] object-cover rounded-3xl animate-photo-float z-10"
          src={person}
          alt="person"
        />

        {/* Skill Bubbles di luar foto */}
        <span className="absolute bubble" style={{ top: "-10%", left: "10%" }}>PHP</span>
        <span className="absolute bubble" style={{ top: "-15%", right: "10%" }}>MySQL</span>
        <span className="absolute bubble" style={{ bottom: "-10%", left: "20%" }}>Laravel</span>
        <span className="absolute bubble" style={{ bottom: "-15%", right: "20%" }}>Git</span>
      </div>
    </div>
  );
};

export default Introduction;
