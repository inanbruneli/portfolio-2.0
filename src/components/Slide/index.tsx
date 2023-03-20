
import { useState, useEffect, useRef } from 'react';
import './index.scss'
import { motion } from 'framer-motion';

const images = ['./images/projetos/ignews/slide1.png', './images/projetos/ignews/slide1.png', './images/projetos/ignews/slide1.png', './images/projetos/ignews/slide1.png', './images/projetos/ignews/slide1.png']

export default function Slide() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current);

    // setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [])

  return (
    <div className="slide-container">
      {/* <motion.div className='carousel' whileTap={{ cursor: 'grabbing' }} ref={carousel}>
        <motion.div className='inner' drag='x' dragConstraints={{ right: 0, left: -width }}>
          {images.map(image => (
            <motion.div className='slide-item' key={image}>
              <img src={image} alt="teste" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </div>

  );
}