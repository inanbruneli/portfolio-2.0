import './App.css';
import Head from "./components/Head";
import Me from './components/Me';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="col-xxl-10 col-lg-11 col-md-11 col-sm-11 col-11 py-3 ">
        <Head />
        <Me />
        <Skills />
      </div>
    </div>
  );
}