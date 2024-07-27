import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Tooltip from '../tooltip/tooltip';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFileUrl from '../../shared/download-cv';

function CvDowndloadButton() {
  const { t } = useTranslation('tooltip_messages');
  const [showTooltip, setShowTooltip] = useState();
  const cvUrl = useFileUrl()
  function handleMouseEnter() {
    setShowTooltip(true);
  }
  function handleMouseLeave() {
    setShowTooltip(false);
  }
  return (
    <div>
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='gruv-nav-link nav-link'
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        download="cv-sebastindiaztorres.pdf">
        <FontAwesomeIcon icon={faFileArrowDown} />
      </a>
      {showTooltip && (
        <Tooltip message={t('cv')} />
      )}
    </div>
  );
}

export default CvDowndloadButton;
