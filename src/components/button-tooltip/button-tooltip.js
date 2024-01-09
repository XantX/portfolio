import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../tooltip/tooltip';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ButtonTooltip(props) {
  const { t } = useTranslation('tooltip_messages');
  const [showTooltip, setShowTooltip] = useState();
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
        onClick={props.action}
        className='gruv-nav-link nav-link'
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        download={props.download}>
        <FontAwesomeIcon icon={props.icon}/>
      </a>
      {showTooltip && (
        <Tooltip message={t(props.button_message)} />
      )}
    </div>
  );
}

export default ButtonTooltip;
