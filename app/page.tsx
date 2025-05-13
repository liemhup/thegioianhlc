import Navbar from "./components/layout/Navbar";
import Carousel from "./components/layout/Carousel";
import Footer from "./components/layout/Footer";
export default function Home() {
  const slides = ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg"];
  return (
    <div>
      <Carousel images={slides}></Carousel>
    </div>
  );
}
