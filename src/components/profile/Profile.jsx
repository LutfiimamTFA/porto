import person from "../../assets/images/lupi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      id="profile"
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile Image Section */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="Profile"
            />
          </div>

          {/* Social Media Section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] shadow-2xl drop-shadow-2xl">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="max-sm:w-full w-[33rem]">
          {/* Name & Title */}
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            I am Lutfi Imam Tauchid Faried Akbar
            <br />
            Junior Web Developer
          </h2>

          {/* Description */}
          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              I am a fresh graduate in Computer Engineering with hands-on
              experience in developing web applications. I have built systems
              for financial transactions at the village level and procurement
              applications using Laravel. I am proficient in PHP, MySQL,
              JavaScript, HTML, CSS, and Git, capable of delivering end-to-end
              solutions from analyzing requirements to implementing web
              applications.
            </p>
            <p className="mt-3">
              My passion is to build scalable, user-friendly web applications
              while writing clean, maintainable code. I am eager to contribute
              to professional IT teams and grow as a Full Stack Web Developer.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex max-md:justify-center gap-4">
            {/* Projects Button */}
            <a
              href="#projects"
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
            >
              My Projects
            </a>

            {/* Download CV Button */}
            <a
              href="/picto/files/lupi_cv.pdf"
              download
              className="btn px-6 py-3 btn-primary flex items-center"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
