'use client';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import './style.css';

export default function PrePage() {
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
          <h5>ТАВТАЙ МОРИЛ!🎉</h5>
          <h1>ЭЦЭГ ЭХЧҮҮДЭЭ</h1>
          <p>
            ✨Та бүхэн манай хуудаснаас өөрийн хүүхдэд тохирох гэртээ ойр байрлах цэцэрлэгийг олох боломжтой ба хүүхдийнхээ мэдээллийг өдөр тутамд цаг алдалгүй авах бүрэн боломжтой.
          </p>
        </section>

        {/* --- Хэрхэн багш олох вэ --- */}
        <section className="guide-section">
          <img src="/images/bagsh2.jpg" alt="bagsh" />
          <div className="guide-text">
            <h4>ЗААВАР</h4>
            <h2>Хэрхэн цэцэрлэгд хамрагдах вэ?</h2>
            <ul>
              <li>Та цэцэрлэгүүдийн мэдээллээс боломжит цэцэрлэгийг сонгон холбогдох ажилтантай холбоо барина.</li>
              <li>Хэрэв таны хүүхэд уг цэцэрлэгд бүртгэлтэй эсвэл элссэн бол тухайн цэцэрлэгээс таньд нэвтрэлтийн ID хаяг болон нууц үгийг өгнө.</li>
              <li>Ингэснээр та манай сайтаас өдөр бүр мэдээлэл хүлээн авах эрхтэй болно.</li>
              <li>Амжилт хүсье🎉</li>
            </ul>
          </div>
        </section>

        {/* --- Шалгаруулалт --- */}
        <section className="criteria-section">
          <h5>Цэцэрлэгүүд</h5>
          <h4>Цэцэрлэгтэй хамтран ажиллах нь</h4>
          <div className="criteria-list">
            <div className="item">
              <img src="../teach.svg" alt="Users icon" className="stat-icon" />
              <p>Цэцэрлэгийн бүртгэлтэй албан ёсны зөвшөөрөлтэй байх</p>
            </div>
            <div className="item">
              <img src="../study.svg" alt="Users icon" className="stat-icon" />
              <p>Сургалтын хөтөлбөр, орчны талаарх дэлгэрэнгүй мэдээлэл</p>
            </div>
            <div className="item">
              <img src="../skill.svg" alt="Users icon" className="stat-icon" />
              <p>Багш ажиллуулахтай холбоотой дотоод журам, нөхцөлүүд</p>
            </div>
          </div>
        </section>

        {/* --- Холбогдох хэсэг --- */}
        <section className="call-section">
          <p>
            Хэрэв та хэрхэн манай байгууллагатай хамтарч ажиллах хүсэлтэй бол байгууллагын дэлгэрэнгүй мэдээллийг илгээнэ үү! БАЯРЛАЛАА
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