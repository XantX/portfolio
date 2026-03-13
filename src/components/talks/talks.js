import { motion } from "motion/react";
import { Presentation, Calendar, Users, ExternalLink, Download, MapPin, Video, Monitor } from "lucide-react";
import "./talks.css";

export default function TalksShowcase({ talks }) {
  return (
    <section id="talks" className="talks-showcase">
      <div className="talks-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="talks-header"
        >
          <span className="talks-section-label">Public Speaking & Mentorship</span>
          <h2 className="talks-main-title">Talks & Presentations</h2>
        </motion.div>

        <div className="talks-grid">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="talk-card"
            >
              <div className="talk-icon-header">
                <div className="talk-main-icons">
                  <Presentation size={32} className="talk-main-icon" />
                  {talk.isVirtual && <Monitor size={20} className="talk-virtual-icon" title="Virtual Talk" />}
                </div>
                <div className="talk-date-badge">
                  <Calendar size={14} />
                  <span>{talk.date}</span>
                </div>
              </div>
              
              <h3 className="talk-title">{talk.title}</h3>
              
              <div className="talk-meta">
                <div className="meta-item">
                  <Users size={16} />
                  <span>{talk.audience}</span>
                </div>
                <div className="meta-item">
                  {talk.isVirtual && talk.videoLink ? (
                    <a 
                      href={talk.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="location-link virtual"
                      title="Watch recording"
                    >
                      <Video size={16} />
                      <span>{talk.location} (Watch Video)</span>
                    </a>
                  ) : (
                    <>
                      <MapPin size={16} />
                      <span>{talk.location}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="talk-description">{talk.description}</p>
              
              <div className="talk-tags">
                {talk.tags.map((tag) => (
                  <span key={tag} className="talk-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="talk-footer">
                <a 
                  href={talk.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`talk-button ${talk.type}`}
                >
                  {talk.type === "drive" ? (
                    <>
                      <ExternalLink size={18} />
                      <span>View Presentation</span>
                    </>
                  ) : (
                    <>
                      <Download size={18} />
                      <span>Download Slides</span>
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
