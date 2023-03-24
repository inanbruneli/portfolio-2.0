import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './index.scss'

interface Props {
  images: string[];
}

export default function Slide({ images }: Props) {
  return (
    <div className='mt-2 slide-itens'>
      <Carousel>
        {images.map((image: string) => (
          <Carousel.Item>
            <img className='image-slide' src={`./images/projetos/${image}`} style={{ maxWidth: '100%', height: 'auto' }} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}