import { faCopy, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import ButtonTooltip from '../button-tooltip/button-tooltip'
import './send-copy-email.css'

function SendCopyEmail() {
  return (
    <div className="container">
      <div className="card fg4 bg-hard">
        <div className="card-body fg4">
          <div className='row'>
            <div className='col-md-8 col-sm-12 center'>
              <p className="email-box">
                Email: sebastian.diaz.trabajo@gmail.com
              </p>
            </div>
            <div className='col-sm-12 col-md-2  center button-card-email'>
              <ButtonTooltip
                icon={faCopy}
                button_message="copy-email"
              ></ButtonTooltip>
            </div>
            <div className='col-sm-12 col-md-2  center button-card-email'>
              <ButtonTooltip
                icon={faMailBulk}
                button_message="send-email"
              ></ButtonTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendCopyEmail
