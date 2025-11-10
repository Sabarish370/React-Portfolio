import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/sabarish-p-5170832a2" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sabarish370" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_sabii_here_?igsh=MXEyaThmYXQ0OXUxbA==" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;