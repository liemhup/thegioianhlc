import Navbar from "./components/layout/Navbar";
import Carousel from "./components/layout/Carousel";
import css from "styled-jsx/css";
export default function Home() {
  const slides = ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg"];
  return (
    <div>
      <Navbar></Navbar>
      <Carousel images={slides}></Carousel>
    </div>
  );
}
