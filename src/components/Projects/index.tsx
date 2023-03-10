import './index.scss';
import Tooltip from '@mui/material/Tooltip';


export default function Projects() {
  return (
    <div className="col-12 mt-2">
      <div className="d-flex gap-5 align-items-end">
        <div className="sobre-mim">
          <h1>projetos</h1>
          <div className="d-flex borda">
            <div className="grossa"></div>
            <div className="fina align-self-end"></div>

          </div>
        </div>
        <div className="row pages gap-1">
          <div className="item-page selected">I</div>
          <div className="item-page">II</div>
          <div className="item-page">III</div>
        </div>
      </div>

      <div className="d-flex container-projects justify-content-between mt-3 gap-3">
        <div className="item-project">
          <img src="./images/projetos/projeto14.png" alt="" />
        </div>
        <div className="item-project">
          <img src="./images/projetos/projeto12.png" alt="" />
        </div>
        <div className="item-project">
          <img src="./images/projetos/projeto13.png" alt="" />
        </div>
      </div>
    </div>
  )
}