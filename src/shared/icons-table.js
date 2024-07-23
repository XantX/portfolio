import { SiNestjs, SiJavascript, SiPython, SiCss3, SiBootstrap, SiTypescript, SiHtml5, SiReact, SiGithub, SiRust } from "react-icons/si";
import { FaNodeJs, FaJava } from 'react-icons/fa';
import { faHtml5, faReact, faCss3, faBootstrap, faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";


const myIcons = new Map();

myIcons.set('html', SiHtml5)
myIcons.set('react', SiReact)
myIcons.set('css', SiCss3)
myIcons.set('bootstrap', SiBootstrap)
myIcons.set('java', FaJava)
myIcons.set('node', FaNodeJs)
myIcons.set('python', SiPython)
myIcons.set('javascript', SiJavascript)
myIcons.set('typescript', SiTypescript)
myIcons.set('nestjs', SiNestjs)
myIcons.set('github', SiGithub)
myIcons.set('rust', SiRust)


const myFontAwesomeIcons = new Map();

myFontAwesomeIcons.set('html', faHtml5)
myFontAwesomeIcons.set('react', faReact)
myFontAwesomeIcons.set('css', faCss3)
myFontAwesomeIcons.set('bootstrap', faBootstrap)
myFontAwesomeIcons.set('java', faJava)
myFontAwesomeIcons.set('node', faNodeJs)
myFontAwesomeIcons.set('python', faPython)

export { myIcons, myFontAwesomeIcons }
