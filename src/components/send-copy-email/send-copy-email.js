import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ButtonTooltip from '../button-tooltip/button-tooltip'
import './send-copy-email.css'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next';

function SendCopyEmail() {
  const { t } = useTranslation(['presentation_card', 'alert_messages']);
  const copyToClipaboard = () => {
    navigator.clipboard.writeText('sebastian.diaz.pe@cloudappi.net').then(() => {
    })
      .catch((err) => {
        console.error(err)
      })
    toast(t('copy-email', { ns: 'alert_messages' }), {
      style: {
        borderColor: 'var(--aqua)',
        backgroundColor: 'var(--aqua)',
        color: 'var(--bg)',
        fontFamily: 'Fira code'
      },
      className: 'class'
    })
  };
  return (
    <div className="container clear">
      <h3 className="color-aqua">{t('subtitle_email')}</h3>
      <div className='row'>
        <div className='col-sm-9 col-md-9 col-lg-9'>
          <div className="card fg4 bg-hard">
            <div className="card-body fg4 email-card">
              <p className="email-box">
                sebastian.diaz.trabajo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-2 col-md-2 col-lg-2 center'>
          <ButtonTooltip
            className="button-card-email"
            icon={faCopy}
            action={copyToClipaboard}
            button_message="copy-email"
          ></ButtonTooltip>
        </div>
      </div>
    </div>
  )
}

export default SendCopyEmail
