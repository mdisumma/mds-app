import { RiLinkedinLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

function SocialIcons() {
  return (
    <nav className="socialIcons">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/marco-di-summa-1a5146182/"
            target="blanck"
            rel="noreferrer"
          >
            <RiLinkedinLine />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/MarcoDiSumma1"
            target="blanck"
            rel="noreferrer"
          >
            <RiTwitterLine />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mdisumma"
            target="blanck"
            rel="noreferrer"
          >
            <RiGithubLine />
          </a>
        </li>
        <li>
          <a href="./asset/cv/Marco_Di_Summa-Resume.pdf" download>
            <FaFileDownload />
          </a>
        </li>
        <li>
          <a href="mailto:mdisumma@yahoo.com">
            <BsEnvelope />
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default SocialIcons;
