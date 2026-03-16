import './tooltip.css'

function Tooltip(props) {
  return (
    <div className="custom-tooltip">
      {props.message}
    </div>
  );
}

export default Tooltip;
