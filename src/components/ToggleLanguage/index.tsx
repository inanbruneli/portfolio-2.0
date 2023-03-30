import { connect } from 'react-redux';
import './index.scss'

interface Props {
  language: string;
  change: () => void;
}

export function ToggleLanguage({ language, change }: Props) {

  return (
    <>
      <input type="checkbox" id="switch" />
      <div className="app">
        <div className="body">
          <div className="content-switch">
            <label htmlFor='switch' className="label-switch">
              <div className="toggle"></div>
              <div className="names">
                <p className="light" onClick={change}>pt</p>
                <p className="light" onClick={change}>en</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLanguage)