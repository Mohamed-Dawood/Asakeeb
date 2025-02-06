import { useState } from 'react';
import './Whysite.css';
import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const accordionData = [
  {
    title: 'بإمكانك من الوصول إلى عدد أكبر من العملاء. (التسويق)',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
  {
    title: 'يبني لك المصداقية والاحترافية لدى العملاء.',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
  {
    title: 'يساهم بشكل أساسي ومهم في بناء علامتك التجارية.',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
  {
    title: 'تحصل من خلاله على كل شيء وتدير كل شيء.',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
  {
    title: 'الاتصال بالعملاء على مدار 24 ساعة.',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
  {
    title: 'تنسى فكرة المواعيد التقليدية في عرض خدماتك.',
    content:
      'عندما يتم بناء الموقع بالشكل الصحيح بما يوافق أسس السيو SEO فإن الموقع يظهر لعملاء جدد من خلال البحث على جوجل.',
  },
];

function Whysite() {
  return (
    <div className="whysite">
      <div className="container">
        <div className="text">
          <h1>لماذا تحتاج الموقع االالكتروني</h1>
          <div className="accordions">
            {accordionData.map((item, index) => (
              <Accordion item={item} />
            ))}
          </div>
        </div>
        <div className="form">
          <form className="contact-form">
            <h1>راسلنا الان لطلب الموقع</h1>
            <div className="form-group">
              <label htmlFor="name">الاسم:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">بريدك الالكتروني:</label>{' '}
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">رقم الهاتف:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">رسالة:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <Button btnText="أرسل رسالة" btnColor="#f25754">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? 'active' : ''}`}>
      <button
        className="header"
        onClick={() => setIsOpen(!isOpen)}
        style={
          isOpen
            ? {
                background: '#f25754',
                color: '#fff',
                borderRadius: 0,
                borderTopLeftRadius: '.5rem',
                borderTopRightRadius: '.5rem',
              }
            : {}
        }
      >
        <h3>{item.title}</h3>

        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="content">{item.content}</div>}
    </div>
  );
};

export default Whysite;
