import { useState } from 'react'

import DarkMode from '../DarkMode';
import './index.css';

export default function Head() {
  const [languageSelected, setLanguageSelected] = useState('pt');

  function changeLanguage() {
    setLanguageSelected('en');
  }

  return (
    <div className="container-head d-flex justify-content-between">
      <div className="logo d-sm-block d-none">inanbrunelli</div>
      <div className="logo d-sm-none d-block">ib</div>
      <div className="d-flex align-items-center">
        <DarkMode />
        <div className="language-novo" >
          {/* <div className="selected d-flex justify-content-center align-items-center"></div> */}
          <div className="row">
            <div className="en language me-2 d-flex justify-content-center align-items-center" onClick={changeLanguage}>
              <span>en</span>
            </div>
            <div className="pt language d-flex justify-content-center align-items-center">pt</div>
          </div>
        </div>
      </div>
    </div>
  )
}