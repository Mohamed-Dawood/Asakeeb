import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhatsAppButton.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function WhatsAppButton() {
  return (
    <button className="whatsapp-button">
      <FontAwesomeIcon icon={faPhone} />
    </button>
  );
}

export default WhatsAppButton;
