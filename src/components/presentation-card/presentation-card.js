import "./presentation-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faCss3, faBootstrap, faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

function PresentacionCard() {
  return (
    <div className="container p-5"  id="about">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-3 ">About Me</h5>
          <p className="card-text">
            👋 Hi, I'm Sebastián! Software engineering student and Backend Developer intern at CloudAppi Peru.
          </p>
          <p className="card-text">
            👨🎓 In my university path, I was able to improve my analytical skills and my mindset when solving problems. In addition, I was able to develop my soft skills by working in very diverse teams and on different projects.  👨🎓 In my university path I was able to improve my analytical skills and my mindset when solving problems. In addition, I was able to develop my soft skills by working in very diverse teams and on different projects.
          </p>
          <p className="card-text">
            This helped me to not only understand my coworkers better, but also to be passionate about my work. I love developing software projects from start to finish 💙. I am passionate about applying best practices in both code scope and project structures.
          </p>
          <p className="card-text">
            I am always developing my ability to be able to understand the requirements that are asked of me. So that I can communicate better with my superiors and be able to put out a quality product.
          </p>
          <p className="card-text">
            🎯 I aim to keep improving my skills as a developer in order to become a software architect and have the ability to provide good quality solutions.
          </p>
          <p className="card-text">
            If you want to know more about me, you can contact me on LinkedIn or email me and we can talk 😀.
          </p>
          <hr class="hr-color border border-2 opacity-50"></hr>
          <div className="row">
            <div className="col orange mt-2">
              <h5 className="card-title fs-4">Backend Skills</h5>
              <p className="card-text">
                I specialize in backend technologies such as:
              </p>
              <div className="icons-container me-4">
                  <FontAwesomeIcon className="tech-icon" icon={faJava} />
                  <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
                  <FontAwesomeIcon className="tech-icon" icon={faPython} />
              </div>
            </div>
            <div className="col yellow mt-2">
              <h5 className="card-title fs-4">Frontend Skills</h5>
              <p className="card-text">
                I specialize in frontend technologies such as:
              </p>
              <div className="icons-container me-4">
                <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
                <FontAwesomeIcon className="tech-icon" icon={faCss3} />
                <FontAwesomeIcon className="tech-icon" icon={faBootstrap} />
                <FontAwesomeIcon className="tech-icon" icon={faReact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentacionCard;
