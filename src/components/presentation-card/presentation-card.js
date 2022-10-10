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
            I am an analytical person and I like to improve my skills
            constantly. I give my best when doing my job and I relate well with
            my team.
          </p>
          <p className="card-text">
            I consider myself a valuable asset to companies because of my
            analytical skills when doing my job.
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
