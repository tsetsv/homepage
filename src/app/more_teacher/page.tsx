'use client';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import './style.css';

export default function ParentsPage() {
  const router = useRouter();
  return (
    <>
      <Header />

      <div className="parents-wrapper">
        {/* --- Hero хэсэг --- */}
        <section className="hero-section">
          <button className="back-button" onClick={() => router.back()}>
            <img src="/back.svg" alt="Буцах icon" className="back-icon" />
            Буцах
          </button>
          <h5>ТАВТАЙ МОРИЛ!</h5>
          <h1>ЭЦЭГ ЭХЧҮҮДЭЭ</h1>
          <p>
            Та бүхэн манай хуудаснаас өөрийн хүүхдэд тохирох гэрийн багшийг олох боломжтой.
          </p>
        </section>

        {/* --- Хэрхэн багш олох вэ --- */}
        <section className="guide-section">
          <img src="/images/bagsh2.jpg" alt="bagsh" />
          <div className="guide-text">
            <h4>ЗААВАР</h4>
            <h2>Хэрхэн багш олох вэ?</h2>
            <ul>
              <li>Боломжит багш нарын мэдээлэлтэй уншиж танилцах</li>
              <li>Өөрийн сонгосон багш луу мэйл илгээх</li>
              <li>Хэрэв тухайн багш болон асран хамгаалагч харилцан зөвшөөрвөл багш, эцэг эх, байгууллага гэсэн гурвалсан гэрээ байгуулан баталгаажна</li>
            </ul>
          </div>
        </section>

        {/* --- Шалгаруулалт --- */}
        <section className="criteria-section">
          <h5>Багш нар</h5>
          <h4>Багш нараа шалгаруулах арга барил</h4>
          <div className="criteria-list">
            <div className="item">
              <img src="../teach.svg" alt="Users icon" className="stat-icon" />
              <p>Өмнө нь гэрийн багшаар ажилласан туршлага</p>
            </div>
            <div className="item">
              <img src="../study.svg" alt="Users icon" className="stat-icon" />
              <p>Төгссөн сургууль, мэргэжил, боловсрол, ур чадвар</p>
            </div>
            <div className="item">
              <img src="../skill.svg" alt="Users icon" className="stat-icon" />
              <p>Анхан шатны багшлах ур чадварын шалгалт</p>
            </div>
          </div>
        </section>

        {/* --- Холбогдох хэсэг --- */}
        <section className="call-section">
          <p>
            Хэрэв та хэрхэн манай байгууллагатай гэрийн багшаар хамтарч ажиллах хүсэлтэй бол өөрийн CV-ийг илгээнэ үү! БАЯРЛАЛАА
          </p>
            <a
            href="https://mail.google.com/mail/?view=cm&to=tstsnblgd@gmail.com&su=Гэрийн%20багшаар%20ажиллах%20PreSchool&body=Сайн%20байна%20уу"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            >
            Мэйл илгээх
            </a>

        </section>
      </div>

      <Footer />
    </>
  );
}