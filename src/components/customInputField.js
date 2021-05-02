import '../css/main.css';
function CustomInputField(props) {
  return (
 
    <div class="inputDiv">
      <input type="text" id={props.placeholder+props.key} name={props.placeholder+props.key} className="inputStyle"  value={props.value} placeholder={props.placeholder} onChange={(e)=>props.handleOnChange(e)}/>
      <label for={props.placeholder+props.key}>{props.placeholder}</label>
    </div>
    
  );
}


export default CustomInputField;
