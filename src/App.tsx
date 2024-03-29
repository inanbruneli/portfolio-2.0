import { useState, useEffect } from 'react';
import './App.scss';
import Head from "./components/Header";
import Me from './components/Me';
import ProjectModal from './components/Modal';
import Projects from './components/Projects';
import Skills from './components/Skills';

interface ButtonsProps {
  text: string;
  class: string;
  link: string;
}

export interface ProjectProps {
  name: string;
  descricao: string;
  image: string;
  page: number;
  buttons: ButtonsProps[];
  tech: string[];
  slideImages: string[];
  date: string;
}

export default function App() {
  const [project, setProject] = useState<ProjectProps>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      {loading ? (
        <div className="container-spinner">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          <div className="col-xxl-10 col-lg-11 col-md-11 col-sm-11 col-11 py-3 pb-5 ">
            <Head />
            <Me />
            <Skills />
            <Projects setProject={setProject} setShowModal={setShowModal} />
            {project && <ProjectModal project={project} showModal={showModal} setShowModal={setShowModal} />}
          </div>
        </div>
      )}

    </>
  );
}


