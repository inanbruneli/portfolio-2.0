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
            Com 6 anos de experiência como desenvolvedor web full stack, 
            possuo sólido domínio em <b>JavaScript</b> e <b>TypeScript</b>, minhas linguagens principais. 
            Tenho ampla experiência em tecnologias como <b>ReactJS</b>, <b>React Native</b>, <b>Node.js</b>, <b>NestJS</b>, <b>Laravel</b> e <b>PostgreSQL</b>, 
            além de conhecimentos avançados em <b>CI/CD</b>, <b>testes automatizados</b> e <b>Git</b>. 
            Com minha experiência, habilidades técnicas e <b>paixão por tecnologia</b>, estou sempre em busca de novos desafios.
          </h1>
        ) : (
          <h1>
            With 6 years of experience as a full stack web developer, 
            I have a strong command of <b>JavaScript</b> and <b>TypeScript</b>, my main languages. 
            I have extensive experience with technologies such as <b>ReactJS</b>, <b>React Native</b>, <b>Node.js</b>, <b>NestJS</b>, <b>Laravel</b>, and <b>PostgreSQL</b>, 
            as well as advanced knowledge in <b>CI/CD</b>, <b>automated testing</b>, and <b>Git</b>. 
            With my experience, technical skills, and <b>passion for technology</b>, 
            I am always seeking new challenges.
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