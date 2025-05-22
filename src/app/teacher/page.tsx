import Header from '../components/header';
import HeroSection from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import TeacherCard from '../components/teach-card';

const TeacherPage: React.FC = () => {
  const teachers = [
    { //багшийн карт бүрэн өөрчлөгдсөн ба teach card tsx css бүгд өөр болсон
      photo: "/images/duck.png",
      name: "Б.Сарантуяа",
      subject: "Математик багш",
      experience: "8 жил",
      rating: "4.9/5",
      students: "150+",
      description: "Математикийн суурь ойлголтуудыг хүүхдүүдэд ойлгомжтой, сонирхолтой байдлаар заадаг. Тоглоом, дүрслэл ашиглан хичээлийг илүү сонирхолтой болгодог.",
      skills: ["Дижитал хичээл", "Интерактив арга", "Бүлгийн ажил"]
    },
    {
      photo: "/images/cat.png",
      name: "Д.Болормаа",
      subject: "Монгол хэл багш",
      experience: "12 жил",
      rating: "4.8/5",
      students: "200+",
      description: "Монгол хэл, уран зохиолын хичээлийг уламжлалт болон орчин үеийн аргуудыг хослуулан заадаг. Хүүхдүүдийн уншлага, бичлэгийн чадварыг хөгжүүлдэг.",
      skills: ["Уламжлалт арга", "Уран зохиол", "Илтгэх чадвар"]
    },
    {
      photo: "/images/draw.png",
      name: "Г.Батбаяр",
      subject: "Англи хэл багш",
      experience: "6 жил",
      rating: "4.7/5",
      students: "180+",
      description: "Англи хэлийг тоглоом, дуу хөгжим, зураг зэргийг ашиглан заадаг. Хүүхдүүд англи хэлийг байгалийн жам дагуу эзэмшихэд туслдаг.",
      skills: ["Мультимедиа", "Тоглоомын арга", "Яриа хэлэлцүүлэг"]
    },
    {
      photo: "/images/group.png",
      name: "С.Оюунчимэг",
      subject: "Дүрслэх урлаг багш",
      experience: "10 жил",
      rating: "4.9/5",
      students: "120+",
      description: "Хүүхдүүдийн бүтээлч сэтгэлгээ, уран бүтээлийн чадварыг хөгжүүлдэг. Өөр өөр материал, техник ашиглан хүүхдүүдийн урлагийн дадлагыг бүрдүүлдэг.",
      skills: ["Бүтээлч сэтгэлгээ", "Өнгө зүй", "Гар урлал"]
    },
    {
      photo: "/images/duck.png",
      name: "Б.Мөнхбат",
      subject: "Хөгжим багш",
      experience: "7 жил",
      rating: "4.8/5",
      students: "90+",
      description: "Дуу хөгжим, хөгжмийн зэмсгийн заах арга зүйд мэргэшсэн. Хүүхдүүдийн дуулах, хөгжмийн зэмсэг тоглох чадварыг хөгжүүлдэг.",
      skills: ["Төгөлдөр хуур", "Дуулах", "Хөгжмийн онол"]
    },
    {
      photo: "/images/duck.png",
      name: "Н.Энхжаргал",
      subject: "Байгаль орчин багш",
      experience: "9 жил",
      rating: "4.7/5",
      students: "160+",
      description: "Байгаль орчны хичээлийг практик туршилт, ажиглалтын аргаар заадаг. Хүүхдүүдэд байгаль хамгаалах ухамсрыг төлөвшүүлдэг.",
      skills: ["Шинжлэх ухаан", "Туршилт", "Байгаль хамгаалал"]
    },
    {
      photo: "/images/duck.png",
      name: "Ц.Нарантуяа",
      subject: "Биеийн тамир багш",
      experience: "5 жил",
      rating: "4.6/5",
      students: "220+",
      description: "Биеийн тамир, эрүүл мэндийн хичээлийг тоглоом, уралдаан, спортын дасгалаар заадаг. Хүүхдүүдийн эрүүл амьдралын хэв маягийг төлөвшүүлдэг.",
      skills: ["Спортын тоглоом", "Эрүүл мэнд", "Багийн ажиллагаа"]
    }
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
          experience={teacher.experience}
          rating={teacher.rating}
          students={teacher.students}
          description={teacher.description}
          skills={teacher.skills}
        />
      ))}
      <Footer />
    </>
  );
};

export default TeacherPage;