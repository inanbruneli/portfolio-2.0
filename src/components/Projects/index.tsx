import './index.scss';
import { projects } from '../../assets/projects';
import { useState } from 'react';
import { ProjectProps } from '../../App';
import { connect } from 'react-redux';

interface Props {
  setProject: (project: ProjectProps) => void;
  setShowModal: (show: boolean) => void;
  language: string;
}

export function Projects({ setProject, setShowModal, language }: Props) {
  const [page, setPage] = useState(1);

  function clickProject(project: ProjectProps) {
    setProject(project);
    setShowModal(true);
  }

  return (
    <div className="col-12 mt-2">
      <div className="d-flex gap-5 align-items-end">
        <div className="sobre-mim">
          <h1>{language == 'pt' ? 'projetos' : 'project'}</h1>
          <div className="d-flex borda">
            <div className="grossa"></div>
            <div className="fina align-self-end"></div>

          </div>
        </div>
        <div className="row pages gap-1">
          <div className={`item-page ${page == 1 && 'page-selected'}`} onClick={() => setPage(1)}>I</div>
          <div className={`item-page ${page == 2 && 'page-selected'}`} onClick={() => setPage(2)}>II</div>
          <div className={`item-page ${page == 3 && 'page-selected'}`} onClick={() => setPage(3)}>III</div>
          <div className={`item-page ${page == 4 && 'page-selected'}`} onClick={() => setPage(4)}>IIII</div>
        </div>
      </div>

      <div className="d-flex container-projects justify-content-between mt-3 gap-3">
        {projects.filter(item => item.page == page).map(item => (
          <div className="item-project" onClick={() => clickProject(item)}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Projects)