import React from "react";
import { useGetAllFilmsQuery } from "../../store/slices/movieSlice";

const TopBody = () => {
  const { data, isLoading } = useGetAllFilmsQuery(1);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data?.results?.slice(0, 2)?.map((item: any) => {
            <div key={item.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
              />
            </div>;
          })}
        </div>
      )}
      <div>
        {data?.results.slice(0, 5).map((item: any) => {
          <div key={item.id}>
            <img
              src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default TopBody;
