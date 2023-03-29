import { connect } from 'react-redux';
import AboutMe from '../AboutMe';
import './index.scss';

export function Me({ language }: any) {

  return (
    <>
      <div className='container-me d-flex justify-content-between'>
        <div className="col-3 illustration">
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-sm-8 col-8 content">
          <div className="content-head d-md-flex d-sm-block d-block">
            <div className="col-md-6 col-sm-12 text-md-start text-sm-center text-center">
              <h1>Inan Brunelli</h1>
              <h2>{language == 'pt' ? 'desenvolvedor front-end' : 'front-end developer'}</h2>
            </div>
            <div className="col-md-6 col-sm-12 d-flex gap-3 justify-content-md-end justify-content-sm-center justify-content-center mt-md-0 mt-sm-4 mt-4">
              <div className="item git" onClick={() => window.open('https://github.com/inanbruneli', '_blank')}>
                <div className="img"></div>
              </div>
              <div className="item whats" onClick={() => window.open('https://wa.link/z2ae3i', '_blank')}>
                <div className="img"></div>
              </div>
              <div className="item linkedin" onClick={() => window.open('https://www.linkedin.com/in/inan-brunelli/', '_blank')}>
                <div className="img"></div>
              </div>
            </div>
          </div>
          <div className="divider my-3 d-md-block d-sm-none d-none"></div>

          <div className="d-md-block d-sm-none d-none">
            <AboutMe />
          </div>

        </div>
      </div>

      <div className="d-md-none d-sm-block d-block mt-3">
        <AboutMe />
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Me)