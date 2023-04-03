import DarkMode from '../DarkMode';
import ToggleLanguage from '../ToggleLanguage';
import './index.css';

export default function Head() {
  return (
    <div className="container-head d-flex justify-content-between align-items-center">
      <div className="logo d-sm-block d-none">inanbrunelli</div>
      <div className="logo d-sm-none d-block">ib</div>
      <div className="d-flex align-items-center">
        <DarkMode />
        <ToggleLanguage />
      </div>
    </div>
  )
}

