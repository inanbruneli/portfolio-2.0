import Modal from '@mui/material/Modal';
import './index.scss'
import { ProjectProps } from '../../App';

interface Props {
  project: ProjectProps;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function ProjectModal({ project, showModal, setShowModal }: Props) {

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="box-modal">
        <div className="container-modal">
          <div className="close"></div>
          <div className="header d-flex align-items-center gap-4">
            <h1 className="fw-bold">{project.name}</h1>
            <div className="tags d-flex gap-2 pb-2">
              {project.buttons.map(button => (
                <div className={button.class} onClick={() => window.open(button.link, '_blank')}>
                  {button.text}
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>

          <div className="descricao d-flex align-items-start gap-3">
            <div className="retangulo"></div>
            <h2>{project.descricao}</h2>
          </div>

          <div className="slide d-flex align-items-center mt-3">
            <div className="slide-seta left"></div>
            <img src="./images/projetos/ignews/slide1.png" alt="" />
            <div className="slide-seta right"></div>
          </div>

          <div className="mt-3">
            <div className="sobre-mim">
              <h1>tecnologias utilizadas</h1>
              <div className="d-flex borda">
                <div className="grossa"></div>
                <div className="fina align-self-end"></div>
              </div>
            </div>

            <div className="tech-container d-flex gap-3 mt-2">
              {project.tech.map(item => (
                <div className="tech d-flex justify-content-center align-items-center">
                  <img src={`./images/tech/${item}.svg`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}