import './index.scss';
import { skills } from '../../assets/skills';

export default function Skills() {
  function makeStars(star: number) {
    let retorno = new Array;
    for (let i = 0; i < 5; i++) {
      const classe = i < star ? 'fill' : '';
      retorno.push(<div className={`dot ${classe}`}></div>)
    }
    return retorno;
  }

  const aplicacoes = ['frontend', 'backend', 'UI'];

  return (
    <div className="container-skills col-12 mt-5">
      <div className="sobre-mim">
        <h1>habilidades</h1>
        <div className="d-flex borda">
          <div className="grossa"></div>
          <div className="fina align-self-end"></div>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between">
        {aplicacoes.map(aplicacao => (
          <div className="skill-item">
            <h1>{aplicacao}</h1>
            <div className="list mt-4">
              {skills.filter(skill => skill.tipo == aplicacao).map(skill => (
                <div className='d-flex justify-content-between mb-1'>
                  <h2>{skill.linguagem}</h2>
                  <div className="dots d-flex col-5 justify-content-between">
                    {makeStars(skill.estrelas)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}