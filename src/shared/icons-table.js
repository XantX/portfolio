import { SiNestjs, SiJavascript, SiPython, SiCss3, SiBootstrap, SiTypescript, SiHtml5, SiReact, SiGithub } from "react-icons/si";
import { FaNodeJs, FaJava } from 'react-icons/fa';


const myIcons = new Map();

myIcons.set('html', SiHtml5)
myIcons.set('react', SiReact)
myIcons.set('css', SiCss3 )
myIcons.set('bootstrap', SiBootstrap)
myIcons.set('java', FaJava)
myIcons.set('node', FaNodeJs)
myIcons.set('python', SiPython)
myIcons.set('javascript', SiJavascript)
myIcons.set('typescrip', SiTypescript)
myIcons.set('nestjs', SiNestjs)
myIcons.set('github', SiGithub) 

export default myIcons;
