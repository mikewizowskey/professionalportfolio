import Navbar from "@/Components/navbar";
import PhotoSlideshow from "@/Components/PhotoSlideShow";
export default function Home() {
  const slidesData = [
    {
      id: 1,
      image: "",
      title: "",
      buttons: [
        { text: "", href: "" },
        { text: "", href: "" },
      ],
    },
    {
      id: 2,
      image: "",
      title: "",
      buttons: [
        { text: "", href: "" },
        { text: "", href: "" },
      ],
    },
    {
      id: 3,
      image: "",
      title: "",
      buttons: [
        { text: "", href: "" },
        { text: "", href: "" },
      ],
    },
  ];
  return (
    <div className="page">
      <Navbar />
      <h1 className="hero">Welcome to My Professional Portfolio</h1>
      <PhotoSlideshow
        slides={slidesData}
        autoPlay={true}
        autoPlayInterval={3000}
        height="80vh"
      />
    </div>
  );
}
