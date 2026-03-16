import { useTranslation } from 'react-i18next';
import CVES from '../files/CV-SebastianDiazTorresES.pdf';
import CVEN from '../files/CV-SebastianDiazTorresEN.pdf';

const useFileUrl = () => {
  const { i18n } = useTranslation();
  const fileUrl = i18n.language === 'es' ? CVES : CVEN;
  return fileUrl;
};

export default useFileUrl;
