import { useEffect, useState } from "react";
import { useGetAllFilmsQuery } from "./store/slices/movieSlice";
import Header from "./layouts/Header/Header";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import Body from "./layouts/Body/Body";
import TopBody from "./layouts/TopBody/TopBody";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <TopBody />
    </div>
  );
}

export default App;
