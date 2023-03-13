import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './index.scss'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
};

export default function ProjectModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container-modal">
            <div className="close"></div>
            <div className="header d-flex align-items-center gap-4">
              <h1 className="fw-bold">ignews</h1>
              <div className="tags d-flex gap-2 pb-2">
                <div className="item-tag selecionado">acesse aqui</div>
                <div className="item-tag">repositório </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="descricao d-flex align-items-start gap-3">
              <div className="retangulo"></div>
              <h2>Ignews é um <b>blog de notícias sobre programação</b> para manter desenvolvedores e entusiastas da tecnologia atualizados.</h2>
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
                <div className="tech d-flex justify-content-center align-items-center">
                  <img src="./images/tech/react.svg" />
                </div>
                <div className="tech">
                  <img src="" />
                </div>
                <div className="tech">
                  <img src="" />
                </div>
                <div className="tech">
                  <img src="" />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}