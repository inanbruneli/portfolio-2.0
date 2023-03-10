import './App.scss';
import Head from "./components/Head";
import Me from './components/Me';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="col-xxl-10 col-lg-11 col-md-11 col-sm-11 col-11 py-3 pb-5 ">
        <Head />
        <Me />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}