import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // 1. Stat pentru controlul Modalului
  const [showModal, setShowModal] = useState(false);

  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  // 2. Construirea URL-ului pentru fișierul local
  // Presupunem că serverul tău rulează pe portul 5000
  const localTrailerUrl = movie?.trailer ? `http://localhost:3000${movie.trailer}` : null;

  return (
    <>
      <div>
        <Link
          to="/"
          className="  text-white font-semibold hover:underline ml-[20rem]"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-[2rem]">
        <div className="flex justify-center items-center">
          <img
            src={movie?.image}
            alt={movie?.name}
            className="w-[70%] rounded"
          />
        </div>
        {/* Container One */}
        <div className="container  flex justify-between ml-[20rem] mt-[3rem]">
          <section>
            <h2 className="text-5xl my-4 font-extrabold">{movie?.name}</h2>
            <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
              {movie?.detail}
            </p>
          {/* 3. Butonul "Watch Trailer" */}
            {movie?.trailer && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition duration-300"
              >
                Watch Trailer
              </button>
            )}
          </section>

          <div className="mr-[5rem]">
            <p className="text-2xl font-semibold">Releasing Date: {movie?.year}</p>
            <div>
              {movie?.cast.map((c, index) => (
                <ul key={index}>
                  <li className="mt-[1rem]">{c}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Logica pentru Modal Pop-up */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <div className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg">
              {/* Buton Închidere */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-teal-500"
              >
                &times; Close
              </button>
              
              {/* Player pentru fișier local */}
              <div className="w-full h-full border-2 border-teal-500 rounded-lg overflow-hidden">
                <ReactPlayer
                  url={localTrailerUrl}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          )}
          
        <div className="container ml-[20rem]">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;