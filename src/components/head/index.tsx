import DarkMode from '../DarkMode';
import './index.css';

export default function Head() {
  return (
    <div className="container-head d-flex justify-content-between">
      <div className="logo d-sm-block d-none">inanbrunelli</div>
      <div className="logo d-sm-none d-block">ib</div>
      <div className="d-flex align-items-center">
        <DarkMode />
        <div className="en language me-2 d-flex justify-content-center align-items-center">en</div>
        <div className="pt language selected d-flex justify-content-center align-items-center">pt</div>
      </div>
    </div>
  )
}