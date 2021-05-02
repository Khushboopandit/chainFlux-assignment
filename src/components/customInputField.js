import '../css/main.css';
function CustomInputField(props) {
  return (
    <div className="inputDiv">
      <input  className="inputStyle" placeholder={props.placeholder} value={props.value} onChange={(e)=>props.handleOnChange(e)}/>
    </div>
  );
}

export default CustomInputField;
