import './Whyus.css';

const items = [
  {
    title: 'موقع متكامل وخاص',
    description:
      'الموقع متكامل الخدمات حيث انه متعدد اللغات بست لغات عالمية. ويخدم الموقع الطلاب و المعلمين و الادارة',
    icon: '🌏',
  },
  {
    title: 'موقع فريد ومتميز',
    description:
      'الموقع متكامل الخدمات حيث انه متعدد اللغات بست لغات عالمية. ويخدم الموقع الطلاب و المعلمين و الادارة',
    icon: '🚀',
  },
  {
    title: 'موقع متكامل وخاص',
    description:
      'الموقع متكامل الخدمات حيث انه متعدد اللغات بست لغات عالمية. ويخدم الموقع الطلاب و المعلمين و الادارة',
    icon: '🤖',
  },
];
function Whyus() {
  return (
    <div className="whyus">
      <div className="section-header">
        <h1>
          لماذا موقعك ما <span className="coloredSpan">إديو نظام؟</span>
        </h1>
      </div>
      <div className="container">
        <div className="items">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Item({ item }) {
  return (
    <div className="item">
      <span>{item.icon}</span>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
export default Whyus;
