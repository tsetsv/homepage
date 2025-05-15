import Header from '../components/header';
import Hero from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import PreCard from '../components/pre-card';

export default function PreschoolPage() {
  const kindergartenList = [
    {
      title: "Нархан цэцэрлэг",
      image: "/images/group.png",
      details: ['4.8 Одтой', '15 жилийн туршлага', 'Уран зургийн анги', 'Утас: +976 1234-5678'],
    },
    {
      title: "Сондор цэцэрлэг",
      image: "/images/group.png",
      details: ['4.7 Одтой', 'Туршлагатай хамт олон', 'Англи хэлний сургалт', 'Утас: +976 8765-4321'],
    },
    {
      title: "Од цэцэрлэг",
      image: "/images/group.png",
      details: ['4.9 Одтой', 'Танин мэдэхүйн клуб', 'Технологийн анги', 'Утас: +976 1122-3344'],
    },
    {
      title: "Ирээдүй цэцэрлэг",
      image: "/images/group.png",
      details: ['4.6 Одтой', 'Эко сургалтын орчин', 'Хөгжим бүжгийн хичээл', 'Утас: +976 9988-7766'],
    },
    {
      title: "Жавхлант цэцэрлэг",
      image: "/images/group.png",
      details: ['4.8 Одтой', 'Сэтгэл судлалын зөвлөгөө', 'Хоол тэжээлийн зөвлөмж', 'Утас: +976 5566-7788'],
    },
  ];

  return (
    <>
      <Header />
      <Hero
        title="Хүүхдэд ээлтэй цэцэрлэгийг эндээс олоорой!"
        text="Та гэртээ ойр байрлалтай, хүүхдэд ээлтэй, таны хүүхдэд төгс тохирох хувийн болон улсын цэцэрлэгийг эндээс хайж олоорой."
        buttonText="Цааш унших"
        image="/images/pre.png"
      />
      <Description
        features={[
          {
            imgSrc: "/images/duck.png",
            imgAlt: "Харилцааны дүрс",
            heading: "Шуурхай харилцаа",
            description: "Багш болон эцэг эхийн хооронд шууд мэдээлэл солилцох боломж.",
          },
          {
            imgSrc: "/images/cat.png",
            imgAlt: "Хуваарийн дүрс",
            heading: "Хичээлийн хуваарь",
            description: "Өдөр тутмын хичээлийн хуваарийг хянах ба төлөвлөх боломж.",
          },
          {
            imgSrc: "/images/message.png",
            imgAlt: "Ахиц дэвшил",
            heading: "Ахиц дэвшил",
            description: "Хүүхдийн сурлагын ахиц дэвшлийг нарийвчлан хянах.",
          },

        ]}
      />
      {kindergartenList.map((kg, index) => (
        <PreCard
          key={index}
          title={kg.title}
          image={kg.image}
          details={kg.details}
        />
      ))}
      <Footer />
    </>
  );
}
