import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../pages/Movies/MovieCard";

const SliderUtil = ({ data }) => {
  // EXTRAGE COMPONENTA CORECTĂ:
  
  const SlickSlider = Slider.default ? Slider.default : Slider;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    // FOLOSEȘTE SlickSlider în loc de Slider
    <SlickSlider {...settings}>
      {data?.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </SlickSlider>
  );
};

export default SliderUtil;