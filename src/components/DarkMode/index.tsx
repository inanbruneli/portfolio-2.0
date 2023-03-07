import './index.scss';

export default function DarkMode() {
  function toggle() {
    document.documentElement.classList.toggle("theme--night");
  }

  return (
    <div className="content" onClick={toggle}>
      <div className="theme-toggle theme-toggle-js">
        <span className="moon"></span>
        <span className="sun"></span>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
      </div >
    </div >
  );
}