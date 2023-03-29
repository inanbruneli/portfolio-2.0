import Modal from '@mui/material/Modal';
import './index.scss'
import { ProjectProps } from '../../App';
import Slide from '../Slide';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';


interface Props {
  project: ProjectProps;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  language: string;
}

export function ProjectModal({ project, showModal, setShowModal, language }: Props) {
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#37352F',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#37352F',
      fontSize: '0.8rem',
    },
  }));

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="box-modal">
        <div className="container-modal">
          <div className="close" style={{ cursor: 'pointer' }} onClick={() => setShowModal(false)}></div>
          <div className="header d-flex flex-sm-row flex-column align-items-center gap-4">
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

          <Slide images={project.slideImages} />

          <div className="mt-3">
            <div className="sobre-mim">
              <h1>{language == 'pt' ? 'tecnologias utilizadas' : 'technologies used'}</h1>
              <div className="d-flex borda">
                <div className="grossa"></div>
                <div className="fina align-self-end"></div>
              </div>
            </div>

            <div className="tech-container d-flex gap-3 mt-2">
              {project.tech.map(item => (
                <BootstrapTooltip title={item} placement="top">
                  <div className="tech d-flex justify-content-center align-items-center">
                    <img src={`./images/tech/${item}.svg`} />
                  </div>
                </BootstrapTooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state: any) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(ProjectModal)