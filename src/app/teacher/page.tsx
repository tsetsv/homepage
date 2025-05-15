import Header from '../components/header';
import HeroSection from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import TeacherCard from '../components/teach-card';

const TeacherPage: React.FC = () => {
  const teachers = [
    {
      photo: "images/teach.jpg",
      name: "Ү.Өнөр",
      subject: "Тооны багш",
      stats: [
        '4.8 Одтой',
        'Багшийн дипломтой',
        '15 жилийн туршлага',
        '3-5 насныханд ордог',
        'Нэг оролт нь 2-4 цаг',
      ],
      description: "Хамгийн өндөр үнэлгээтэй багш нар таны хүүхдэд хичээ орно.",
    },
    {
      photo: "images/teach.jpg",
      name: "Д.Энхжаргал",
      subject: "Англи хэлний багш",
      stats: [
        '5.0 Одтой',
        'TESOL гэрчилгээтэй',
        '10 жилийн туршлага',
        '6-12 насныханд ордог',
        'Нэг оролт нь 1-2 цаг',
      ],
      description: "Англи хэлний чадварыг өндөр түвшинд хөгжүүлэх боломж.",
    },
    {
      photo: "images/teach.jpg",
      name: "Б.Цогт",
      subject: "Байгалийн ухааны багш",
      stats: [
        '4.7 Одтой',
        'Багшийн мэргэжилтэй',
        '8 жилийн туршлага',
        '12-16 насныханд ордог',
        'Нэг оролт нь 3 цаг',
      ],
      description: "Хүүхдүүдэд туршилт, практик хичээлээр дамжуулан байгалийн ухааныг заана.",
    },
    {
      photo: "images/teach.jpg",
      name: "С.Оюунтуяа",
      subject: "Уран зохиолын багш",
      stats: [
        '4.9 Одтой',
        'Багшийн зэрэгтэй',
        '12 жилийн туршлага',
        '9-14 насныханд ордог',
        'Нэг оролт нь 90 минут',
      ],
      description: "Уран зохиол, унших чадварыг хөгжүүлэхэд туслах мэргэжлийн багш.",
    },
    {
      photo: "images/teach.jpg",
      name: "Г.Эрдэнэбат",
      subject: "Дуу хөгжмийн багш",
      stats: [
        '4.6 Одтой',
        'Хөгжмийн мэргэжилтэй',
        '20 жилийн туршлага',
        '6-18 насныханд ордог',
        'Нэг оролт нь 2 цаг',
      ],
      description: "Хөгжим сурах сонирхолтой хүүхдүүдэд зориулсан хичээлүүд.",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection
        title="Гэрийн багштай холбогдох хамгийн хялбар арга!"
        text="Бид таны хүүхдийн боловсролд хувь нэмэр оруулах шилдэг багш нарыг санал болгож байна."
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
      {teachers.map((teacher, index) => (
        <TeacherCard
          key={index}
          photo={teacher.photo}
          name={teacher.name}
          subject={teacher.subject}
          stats={teacher.stats}
          description={teacher.description}
        />
      ))}
      <Footer />
    </>
  );
};

export default TeacherPage;