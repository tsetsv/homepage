import Header from '../components/header';
import Hero from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import PreCard from '../components/pre-card';

export default function PreschoolPage() {
  const schools = [
    {
      id: 1,
      name: "Нархан цэцэрлэг",
      category: "Хувийн",
      loacation: "Хан-Уул дүүрэг",
      loclink: "https://www.google.com/maps/place/%D0%98-%D0%BC%D0%B0%D1%80%D1%82+%D0%A5%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB/@47.9002865,106.9139903,14z/data=!4m6!3m5!1s0x5d9693ac5e2fdd07:0x675fe0fe01c80f57!8m2!3d47.9002871!4d106.9287116!16s%2Fg%2F11h3c8rhdq?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
      students: "2000+",
      teachers: "50+",
      experience: "10 жилийн туршлагатай",
      rating: 5,
      price: 200000,
      duration: "1 сарын төлбөр",
      imageUrl: "/images/pre1.jpg",
      introduction: "____🎉 Манай цэцэрлэгт тавтай морил! Бид хүүхдийн хөгжлийг бүх талаас нь дэмжих, халамжтай, аюулгүй, аз жаргалтай орчныг бүрдүүлж ажилладаг. Сургалтын хөтөлбөр маань тоглонгоо суралцах аргачлал дээр тулгуурласан бөгөөд хүүхдийн нас сэтгэхүйн онцлогт тохируулсан байдаг. Манай баг хамт олон туршлагатай, мэргэжлийн багш нараас бүрддэг.",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 2,
      name: "112-р цэцэрлэг",
      category: "Улсын",
      loacation: "Баянзүрх дүүрэг",
      loclink: "https://www.google.com/maps/@47.9002865,106.9139903,14z?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
      students: "3000+",
      teachers: "90+",
      experience: "30 жилийн туршлагатай",
      rating: 4.5,
      price: 0,
      duration: "1 сарын төлбөр",
      imageUrl: "/images/pre2.jpg",
      introduction: "___🪄 Тоглоом бол суралцах хамгийн сайхан арга юм. Бид хүүхэд бүрийг өвөрмөц, онцгой гэж үздэг бөгөөд тэдний сонирхол, авьяас, сэтгэхүйд тулгуурлан хөгжүүлэх зорилготой. Танай хүүхэд энд өөртөө итгэх итгэлтэй, эрүүл дадал зуршилтай, баяр хөөртэй ирээдүйн иргэн болон төлөвшнө гэдэгт итгэлтэй байна.",
      email: "tstsnblgd@gmail.com"
    },
    {
      id: 3,
      name: "Нархан цэцэрлэг",
      category: "Хувийн",
      loacation: "Хан-Уул дүүрэг",
      loclink: "https://www.google.com/maps/place/%D0%98-%D0%BC%D0%B0%D1%80%D1%82+%D0%A5%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB/@47.9002865,106.9139903,14z/data=!4m6!3m5!1s0x5d9693ac5e2fdd07:0x675fe0fe01c80f57!8m2!3d47.9002871!4d106.9287116!16s%2Fg%2F11h3c8rhdq?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
      students: "2000+",
      teachers: "50+",
      experience: "10 жилийн туршлагатай",
      rating: 5,
      price: 200000,
      duration: "1 сарын төлбөр",
      imageUrl: "/images/pre1.jpg",
      introduction: "____🎉 Манай цэцэрлэгт тавтай морил! Бид хүүхдийн хөгжлийг бүх талаас нь дэмжих, халамжтай, аюулгүй, аз жаргалтай орчныг бүрдүүлж ажилладаг. Сургалтын хөтөлбөр маань тоглонгоо суралцах аргачлал дээр тулгуурласан бөгөөд хүүхдийн нас сэтгэхүйн онцлогт тохируулсан байдаг. Манай баг хамт олон туршлагатай, мэргэжлийн багш нараас бүрддэг.",
      email: "tstsnblgd@gmail.com"
    }
  ];


  return (
    <>
      <Header />
      <Hero
        title="Хүүхдэд ээлтэй цэцэрлэгийг эндээс олоорой!"
        text="Та гэртээ ойр байрлалтай, хүүхдэд ээлтэй, таны хүүхдэд төгс тохирох хувийн болон улсын цэцэрлэгийг эндээс хайж олоорой."
        page="/more_pre"
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
      <div className="teachers-grid">
          {schools.map((teacher) => (
            <PreCard
              key={teacher.id}
              name={teacher.name}
              category={teacher.category}
              location={teacher.loacation}
              loclink={teacher.loclink}
              students={teacher.students}
              teachers={teacher.teachers}
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
}
