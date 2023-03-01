import './index.scss';

export default function Skills() {
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
        <div className="skill-item">
          <h1>frontend</h1>
          <div className="list">
            <div className='d-flex justify-content-between'>
              <h2>Javascript</h2>
              <div className="dots d-flex col-5 justify-content-between">
                <div className="dot fill"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <h2>Javascript</h2>
              <div className="dots d-flex col-5 justify-content-between">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-item">
          <h1>backend</h1>
        </div>
        <div className="skill-item">
          <h1>ui/ux</h1>
        </div>
      </div>


    </div>
  )
}