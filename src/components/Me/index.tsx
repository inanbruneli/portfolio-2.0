import './index.css';

export default function Me() {
  return (
    <div className='container-me d-flex justify-content-between'>
      <div className="col-3 illustration"></div>
      <div className="col-9 content">
        <div className="content-head row">
          <div className="col-6">
            <h1>Inan Brunelli</h1>
            <h2>desenvolvedor front-end</h2>
          </div>
          <div className="col-6 d-flex justify-content-end gap-3">
            <div className="item git">
              <div className="img"></div>
            </div>
            <div className="item whats">
              <div className="img"></div>
            </div>
            <div className="item insta">
              <div className="img"></div>
            </div>
          </div>
        </div>
        <div className="divider my-3"></div>

        <div className="sobre-mim">
          <h1>sobre mim</h1>
          <div className="d-flex borda">
            <div className="grossa"></div>
            <div className="fina align-self-end"></div>
          </div>
          <div className="main-text mt-2">
            <h1>
              Com 4 anos de experiência no desenvolvimento de aplicações front-end,
              tenho habilidades sólidas em <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJS</b>,
              <b>React Native</b>, <b>CSS</b>, <b>Laravel</b>, <b>PostgreSQL</b>, <b>Git</b> e <b>Figma</b>. Com minha experiência, habilidades técnicas e <b>paixão por tecnologia</b>, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}