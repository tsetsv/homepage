import Header from '../components/header';
import HeroSection from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import TeacherCard from '../components/teach-card';

const TeacherPage: React.FC = () => {
  const teachers = [
    {
      icd: 1,
      name: "Д. Гантуяа",
      flag: "🇲🇳",
      subject: "Математик",
      students: "2",
      experience: "5 жилийн турш хөгжүүлсэн, 5 жил бага сургуульд багшилсан",
      rating: 5,
      price: 50000,
      duration: "60 мин хичээл",
      imageUrl: "/images/bagsh1.jpg",
      introduction: "😊 — Hello there! My name is Peter and I am from England! I have lived here my whole life and I currently live in the south of England in a place called Brighton, not too far from London. I have a BA Degree in Songwriting and I am currently doing a Master's Degree in Songwriting in London.",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 2,
      name: "Б. Батбаяр",
      flag: "🇲🇳",
      subject: "Физик",
      students: "8",
      experience: "10 жилийн дунд сургуулийн туршлагатай, 3 жил их сургуульд багшилсан",
      rating: 4,
      price: 45000,
      duration: "90 мин хичээл",
      imageUrl: "/Images/bagsh2.jpg",
      introduction: "🔬 — Сайн байна уу! Би физикийн багш Батбаяр. Шинжлэх ухааны салбарт олон жилийн туршлагатай. Хүүхдүүдэд физикийн хичээлийг сонирхолтой, ойлгомжтой заах дуртай.",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 3,
      name: "С. Сарангэрэл",
      flag: "🇲🇳",
      subject: "Англи хэл",
      students: "15",
      experience: "7 жилийн хэл заах туршлагатай, IELTS болон TOEFL бэлтгэл хичээл зааж байсан",
      rating: 5,
      price: 35000,
      duration: "45 мин хичээл",
      imageUrl: "/Images/bagsh3.jpg",
      introduction: "🌟 — Hi everyone! I'm Sarah, an experienced English teacher. I love helping students improve their language skills and achieve their goals. Let's make learning English fun and effective together!",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 4,
      name: "Т. Төмөрбаатар",
      flag: "🇲🇳",
      subject: "Хими",
      students: "6",
      experience: "12 жилийн химийн багшийн туршлагатай, олимпиад бэлтгэл хичээл заадаг",
      rating: 4,
      price: 40000,
      duration: "75 мин хичээл",
      imageUrl: "/Images/bagsh1.jpg",
      introduction: "⚗️ — Сайн байна уу! Би химийн багш Төмөрбаатар. Химийн хичээлийг амьдралын жишээтэй холбон заах дуртай. Суралцагчид маань химийн ертөнцийг сонирхолтойгоор судлаж байна.",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 5,
      name: "О. Отгонбаяр",
      flag: "🇲🇳",
      subject: "Программчлал",
      students: "20",
      experience: "8 жилийн програм хангамж хөгжүүлэх туршлагатай, 4 жил хүүхдүүдэд кодлох заасан",
      rating: 5,
      price: 60000,
      duration: "120 мин хичээл",
      imageUrl: "/Images/bagsh2.jpg",
      introduction: "💻 — Hello! I'm a software developer turned teacher. I specialize in teaching programming to kids and beginners. Let's code together and build amazing projects while having fun!",
      email: "tstsnblgd@gmail.com"
    }
  ];

  return (
    <>
      <Header />
      <HeroSection
        title="Гэрийн багштай холбогдох хамгийн хялбар арга!"
        text="Бид таны хүүхдийн боловсролд хувь нэмэр оруулах шилдэг багш нарыг санал болгож байна."
        page="/more_teacher"
        buttonText="Цааш унших"
        image="/images/teacher.png"
      />
      <Description
        features={[
          {
            imgSrc: "/images/cat.png",
            imgAlt: "Харилцааны дүрс",
            heading: "Шуурхай харилцаа",
            description: "Багш болон эцэг эхийн хооронд шууд мэдээлэл солилцох боломж.",
          },
          {
            imgSrc: "/images/message.png",
            imgAlt: "Хуваарийн дүрс",
            heading: "Хичээлийн хуваарь",
            description: "Өдөр тутмын хичээлийн хуваарийг хянах ба төлөвлөх боломж.",
          },
          {
            imgSrc: "/images/apple 1.png",
            imgAlt: "Ахиц дэвшил",
            heading: "Ахиц дэвшил",
            description: "Хүүхдийн сурлагын ахиц дэвшлийг нарийвчлан хянах.",
          },
        ]}
      />
      <div className="teachers-grid">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              name={teacher.name}
              flag={teacher.flag}
              subject={teacher.subject}
              students={teacher.students}
              experience={teacher.experience}
              rating={teacher.rating}
              price={teacher.price}
              duration={teacher.duration}
              imageUrl={teacher.imageUrl}
              introduction={teacher.introduction}
              email={teacher.email}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default TeacherPage;