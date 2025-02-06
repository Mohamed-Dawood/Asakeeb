import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Components/Button';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>
          <span className="coloredSpan"> إديو نظام</span> خيارك الافضل
        </h1>
        <p>
          {' '}
          نوفر لك الموقع الاكتروني و السيستم الاداري التعليمي بالمواصفات التي
          يحتاجها عملك
        </p>
        <Button btnText="نظام الموقع الاكتروني" btnColor="#e8524d">
          <FontAwesomeIcon icon={faFileLines} />
        </Button>
      </div>
    </div>
  );
}

export default Home;
