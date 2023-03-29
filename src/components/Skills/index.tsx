import './index.scss';
import { skills } from '../../assets/skills';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';

export function Skills({ language }: any) {
  function makeStars(star: number) {
    let retorno = new Array;
    for (let i = 0; i < 5; i++) {
      const classe = i < star ? 'fill' : '';
      retorno.push(<div className={`dot ${classe}`}></div>)
    }
    return retorno;
  }

  const aplicacoes = ['frontend', 'backend', 'UI'];

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
    <div className="container-skills col-12 mt-5">
      <div className="sobre-mim">
        <h1>{language == 'pt' ? 'habilidades' : 'skills'}</h1>
        <div className="d-flex borda">
          <div className="grossa"></div>
          <div className="fina align-self-end"></div>
        </div>
      </div>

      <div className="mt-3 d-lg-flex d-md-block justify-content-between">
        {aplicacoes.map(aplicacao => (
          <div className="skill-item mb-5">
            <h1>{aplicacao}</h1>
            <div className="list mt-3">
              {skills.filter(skill => skill.tipo == aplicacao).map((skill: any) => (
                <BootstrapTooltip title={skill.text[language]} placement="right">
                  <div className='stack d-flex justify-content-between align-items-center'>
                    <span>{skill.linguagem}</span>
                    <div className="dots d-flex col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6 justify-content-between">
                      {makeStars(skill.estrelas)}
                    </div>
                  </div>
                </BootstrapTooltip>
              ))}
            </div>
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

export default connect(mapStateToProps)(Skills)