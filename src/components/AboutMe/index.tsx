import { connect } from 'react-redux';
import '../Me/index.scss';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export function AboutMe({ language }: any) {
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

  const mainStacks = ['Javascript', 'ReactJS', 'Typescript', 'PostgreSQL', 'Figma']

  return (
    <div className="sobre-mim">
      <h1>{language == 'pt' ? 'sobre mim' : 'about me'}</h1>
      <div className="d-flex borda">
        <div className="grossa"></div>
        <div className="fina align-self-end"></div>
      </div>
      <div className="main-text mt-2">
        {language == 'pt' ? (
          <h1>
            Com 4 anos de experiência no desenvolvimento de aplicações front-end,
            tenho habilidades sólidas em <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJS</b>,
            <b> React Native</b>, <b>CSS</b>, <b>Laravel</b>, <b>PostgreSQL</b>, <b>Git</b> e <b>Figma</b>.
            Com minha experiência, habilidades técnicas e <b>paixão por tecnologia</b>, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
          </h1>
        ) : (
          <h1>
            With 4 years of experience in front-end application development,
            I have solid skills in <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJS</b>,
            <b>React Native</b>, <b>CSS</b>, <b>Laravel</b>, <b>PostgreSQL</b>, <b>Git</b>, and <b>Figma</b>.
            With my experience, technical skills, and <b>passion for technology</b>, I am always looking for new challenges and opportunities to grow professionally.
          </h1>
        )}
      </div>
      <div className="d-flex gap-3 mt-2">
        {mainStacks.map(stack => (
          <BootstrapTooltip title={stack} placement="top">
            <div className="main-tech tech d-flex justify-content-center align-items-center">
              <img src={`./images/tech/${stack}.svg`} />
            </div>
          </BootstrapTooltip>
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

export default connect(mapStateToProps)(AboutMe)