import { Copy, Check } from "lucide-react";
import './send-copy-email.css'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function SendCopyEmail() {
  const { t } = useTranslation(['presentation_card', 'alert_messages']);

  const [copied, setCopied] = useState(false);
  const email = "sebastian.diaz.trabajo@gmail.com";

  const copyToClipaboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

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
    <div className="email-section">
      <label className="email-label">{t('subtitle_email')}</label>
      <div className="email-input-group">
        <div className="email-display">
          {email}
        </div>
        <button 
          className="copy-btn" 
          onClick={copyToClipaboard}
          title="Copy to clipboard"
        >
          {copied ? <Check size={20} className="green" /> : <Copy size={20} />}
        </button>
      </div>
    </div>
  )
}

export default SendCopyEmail
