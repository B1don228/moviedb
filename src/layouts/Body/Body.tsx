import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllFilmsQuery } from "../../store/slices/movieSlice";
import styles from "./Body.module.scss";

const Body = () => {
  const swiperRef = useRef<any>(null);

  const [page, setPage] = useState<number>(1);

  const { data, refetch, isLoading } = useGetAllFilmsQuery(page, {
    refetchOnMountOrArgChange: page,
  });

  useEffect(() => {
    refetch();
    console.log(page);
  }, [page]);

  return (
    <div>
      {!isLoading && (
        <div>
          <Swiper
            ref={swiperRef}
            spaceBetween={50}
            navigation
            slidesPerView={5}
            onReachEnd={() => {
              swiperRef.current.swiper.slideTo(0);
              setTimeout(() => {
                setPage((prev) => prev + 1);
              }, 0);
            }}
          >
            {data.results.map((item: any) => (
              <SwiperSlide className={styles.item}>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Body;
