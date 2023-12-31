import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { my_KEY, singlemovieRoute } from "../Urlendpoint/Urlendpoint";
import { RingLoader } from "react-spinners";
import Movieinformation from "../components/Movieinformation";

const   Singlemovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  const {
    backdrop_path,
    title,
    release_date,
    runtime,
    overview,
    vote_average,
  } = movie;

  const utcDate = new Date(release_date).toUTCString();

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${singlemovieRoute}/${movieId}?${my_KEY}`);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      setErrors(error.stack);
      console.log(errors);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [backdrop_path]);

  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <RingLoader color="#ee0dbd" height={25} />
      </div>
    );
  }

  return (
    <div className="bg-white h-screen flex gap-5">
      <Sidebar />

      {errors.length || movie.success === false ? (
        <div className="grid h-screen w-full place-items-center">
          <p className="font-bold text-2xl text-gray-600">
            Oops.. Something went wrong, unable to fetch data
          </p>
        </div>
      ) : (
        <Movieinformation
          backdrop_path={backdrop_path}
          title={title}
          runtime={runtime}
          utcDate={utcDate}
          overview={overview}
          vote_average={vote_average}
        />
      )}
    </div>
  );
};

export default Singlemovie;
