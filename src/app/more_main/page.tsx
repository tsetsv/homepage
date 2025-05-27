import Header from '../components/header';
import Footer from '../components/footer';
import './style.css';

export default function PreschoolPage() {
  return (
    <>
      <Header />

      <div className="preschool-wrapper">
        {/* --- Нүүр хэсэг --- */}
        <section className="hero-section">
          <div className="overlay"></div>
          <div className="hero-content">
            <h5>🎉ТАВТАЙ МОРИЛ!🎉</h5>
            <h1>PRESCHOOL</h1>
            <p>
              Бид бол сургуулийн өмнөх насны хүүхдүүд рүү чиглэсэн ухаалаг шийдлийг хэрэгжүүлэгч
              хэн бүхэнтэй нээлттэй хамт олон🖊️
            </p>
          </div>
        </section>

        {/* --- Дэлгэрэнгүй хэсэг --- */}
        <section className="about-section">
          <div className="about-container">
            <img src="/images/digi.jpg" alt="Digital" className="about-image" />
            <div className="about-text">
              <h3>Бидний тухай</h3>
              <h2>БИД ЮУ ХИЙДЭГ ВЭ?</h2>
              <p>
                Манай хамт олон цахимжуулсан өдөр тутмын үйл ажиллагааг цахим хяналт, камер, тайлангаар дэмжиж,
                гэрийн багшийн санал, эцэг эхийн хамтын ажиллагааг хангах, цэцэрлэгүүдийг холбосон систем хөгжүүлдэг.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <img src="../study.svg" alt="Users icon" className="stat-icon" />
                  <div>
                    <h4>100+</h4>
                    <p>Суралцагч</p>
                  </div>
                </div>
                <div className="stat-item">
                  <img src="../loc.svg" alt="Users icon" className="stat-icon" />
                  <div>
                    <h4>10+</h4>
                    <p>Цэцэрлэг</p>
                  </div>
                </div>
                <div className="stat-item">
                  <img src="../teach.svg" alt="Users icon" className="stat-icon" />
                  <div>
                    <h4>50+</h4>
                    <p>Гэрийн багш</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Багийн хэсэг --- */}
        <section className="team-section">
          <h3>Хамт олон</h3>
          <h2>Бидний тухай</h2>
          <div className="team-container">
            {[
              { name: 'Г. Мөрөн', title: 'Full Stack Developer', github: 'https://github.com/Murunation', img: '/images/murun.jpg' },
              { name: 'Г. Анхтуяа', title: 'Full Stack Developer', github: 'https://github.com/AnkhaaProg', img: '/images/anhtulga.png' },
              { name: 'Г. Цэцэнбилэг', title: 'Frontend Developer', github: 'https://github.com/tsetsv', img: '/images/tsvtsv.png' }
            ].map((member, idx) => (
              <div className="team-card" key={idx}>
                <img src={member.img} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.title}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}