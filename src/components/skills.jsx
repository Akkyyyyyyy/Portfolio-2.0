
import { SiExpress, SiTailwindcss, SiMongodb, SiNodedotjs, SiJavascript, SiReact, SiHtml5, SiCss3, SiGithub, SiMysql } from "react-icons/si";
const size = "w-8 h-8";
export const skills = [
  { name: "React", icon: <SiReact className={size} /> },
  { name: "Node.js", icon: <SiNodedotjs className={size} /> },
  { name: "MongoDB", icon: <SiMongodb className={size} /> },
  { name: "MySQL", icon: <SiMysql className={size} /> },
  { 
    name: "HTML/CSS", 
    icon: (
      <>
        <SiHtml5 className={size} />
        <SiCss3 className={size} />
      </>
    ) 
  },
  { name: "Express.js", icon: <SiExpress className={size} /> },
  { name: "Github", icon: <SiGithub className={size} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className={size} /> },
];
