import Header from './components/header';
import Hero from './components/hero';
import Description from './components/description';
import DetailSection from './components/detail-section';
import Footer from './components/footer';
import Images from './components/images';

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Цэцэрлэгтэй холбогдох хамгийн хялбар арга!"
        text="Таны хүүхдийг эрүүл, аюулгүй сурч боловсроход бид анхаарах болно."
        buttonText="Цааш унших"
        image="/images/home.png"
      />
      <Description
        features={[
          {
            imgSrc: "/images/draw.png",
            imgAlt: "Харилцааны дүрс",
            heading: "Шуурхай харилцаа",
            description: "Багш болон эцэг эхийн хооронд шууд мэдээлэл солилцох боломж.",
          },
          {
            imgSrc: "/images/duck.png",
            imgAlt: "Хуваарийн дүрс",
            heading: "Хичээлийн хуваарь",
            description: "Өдөр тутмын хичээлийн хуваарийг хянах ба төлөвлөх боломж.",
          },
          {
            imgSrc: "/images/kitty.png",
            imgAlt: "Ахиц дэвшил",
            heading: "Ахиц дэвшил",
            description: "Хүүхдийн сурлагын ахиц дэвшлийг нарийвчлан хянах.",
          },
        ]}
      />
      <Images />
      <DetailSection
        bannerImg="/images/detail-left.png"
        iconImg="/images/message.png"
        heading="Харилцаа хамааралтай байх"
        description="Эцэг эх, багш, эрхлэгч нар хэзээ ч, хаанаас ч хялбар харилцах боломжтой. Багшийн мэдээлэл, хичээлийн хуваарь, ахиц дэвшил зэргийг хянах боломж"
        isImageRight={true}
      />
      <DetailSection
        bannerImg="/images/detail-left.png"
        iconImg="/images/message.png"
        heading="Багшийн мэдээлэл"
        description="Багшийн мэдээлэл, хичээлийн хуваарь, ахиц дэвшил зэргийг хянах боломж. Багшийн мэдээлэл, хичээлийн хуваарь, ахиц дэвшил зэргийг хянах боломж"
        isImageRight={false}
      />
      <DetailSection
        bannerImg="/images/detail-left.png"
        iconImg="/images/message.png"
        heading="Багшийн мэдээлэл"
        description="Багшийн мэдээлэл, хичээлийн хуваарь, ахиц дэвшил зэргийг хянах боломж."
        isImageRight={false}
      />
      <DetailSection
        bannerImg="/images/detail-left.png"
        iconImg="/images/message.png"
        heading="Багшийн мэдээлэл"
        description="Багшийн мэдээлэл, хичээлийн хуваарь, ахиц дэвшил зэргийг хянах боломж."
        isImageRight={false}
      />
      <Footer />
    </>
  );
}