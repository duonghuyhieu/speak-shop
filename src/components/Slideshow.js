import React from 'react'
import Slide1 from '../assets/Slide1.jpg'
import Slide2 from '../assets/Slide2.jpg'
import Slide3 from '../assets/Slide3.jpg'
import '../Styles/Slideshow.css'
const slides = [Slide1, Slide2, Slide3];
const delay = 2000
function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
React.useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  
return (
    <div className='Home__slidewrapper'>
        <div className='Home__slide'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {slides.map((img, index) =>(
                <img src={img} alt="" key="index" className='slide'></img>
              ))
                }
          </div>
          <div className="slideshowDots">
            {slides.map((_, idx) => (
          <div key={idx} 
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}></div>
         ))}
      </div>
    </div>
  )
}

export default Slideshow