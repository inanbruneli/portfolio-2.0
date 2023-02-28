import './App.css';
import Head from "./components/Head";
import Me from './components/Me';

export default function App() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="col-9 py-3 ">
        <Head />
        <Me />
      </div>
    </div>
  );
}