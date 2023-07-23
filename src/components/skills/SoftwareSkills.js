import { SiAdobe } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbVectorBezier } from "react-icons/tb";

import { IconContext } from "react-icons";
import "./Skills.css";

function SoftwareSkills() {
  return (
    <section id="skills">
      <h2>Software skills</h2>
      <IconContext.Provider
        value={{
          color: "var(--mid-tone)",
          size: 35,
        }}
      >
        <ul>
          <li>
            <SiAdobe />
            Adobe
          </li>
          <li>
            <SiAdobeillustrator />
            Illustrator
          </li>
          <li>
            <SiAdobephotoshop />
            Photoshop
          </li>
          <li>
            <SiFigma />
            Figma
          </li>
          <li>
            <SiAdobexd />
            Xd
          </li>
          <li>
            <TbVectorBezier />
            SVG
          </li>
          <li>
            <SiVisualstudiocode />
            Visual Studio
          </li>
          <li>
            <SiPostman />
            Postman
          </li>
          <li>
            <SiNetlify />
            Netlify
          </li>
        </ul>
      </IconContext.Provider>
    </section>
  );
}

export default SoftwareSkills;
