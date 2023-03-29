import { connect } from 'react-redux';

import DarkMode from '../DarkMode';
import './index.css';

interface Props {
  language: string;
  change: () => void;
}

export function Head({ language, change }: Props) {
  function changeLanguage(newLanguage: string) {
    language !== newLanguage && change();
  }

  return (
    <div className="container-head d-flex justify-content-between">
      <div className="logo d-sm-block d-none">inanbrunelli</div>
      <h3>{language}</h3>
      <div className="logo d-sm-none d-block">ib</div>
      <div className="d-flex align-items-center">
        <DarkMode />
        <div className="language-novo" >
          <div className="row">
            <div className="en language me-2 d-flex justify-content-center align-items-center" onClick={() => changeLanguage('en')}>
              en
            </div>
            <div className="pt language d-flex justify-content-center align-items-center" onClick={() => changeLanguage('pt')}>
              pt
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    language: state.language
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    change: () => dispatch({ type: 'language/change' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)