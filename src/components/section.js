import "../css/main.css";
import CustomInputField from "./customInputField";
function FirstSection(props) {

  function handleBatchNumberOnChange(e){
    let list = props.data
    list[props.index].batchNumber = e.target.value
    props.updateData(list)
  }
  return (
    <div className="mt-4 mb-2" key={"section" + props.index}>
        {/* Batch Number input */}
      <CustomInputField placeholder={"Batch Number"} value={props.section.batchNumber} handleOnChange={handleBatchNumberOnChange}/>
     {/* Card for inner section*/}
      <div className="card my-4">
        <p className="card-heading">Capture Bar Details</p>
        {props?.section?.barDetails?.map((detail, ind) => (
          <div key={"input-div" + ind + " " + props.index}>
            {renderSectionInputs(detail, ind, props.index,props)}
          </div>
        ))}
        {renderAddBar(props)}
      </div>
      {renderAddBatch(props)}
    </div>
  );
}

function renderSectionInputs(details, ind, sectionIndex,props) {
    const handleBarNumber=(e)=>{
        let list = props.data
        list[sectionIndex].barDetails[ind].barNumber = e.target.value
        props.updateData(list)
    }
    const handleBarWeight=(e)=>{
        let list = props.data
        list[sectionIndex].barDetails[ind].barWeight = e.target.value
        props.updateData(list)
    }
    const handleFineness=(e)=>{
        let list = props.data
        list[sectionIndex].barDetails[ind].fineness = e.target.value
        props.updateData(list)
    }
  return (
    <div className="row mb-2">
      <div className="col-4">
        <CustomInputField placeholder={"Bar Number"} value={details.barNumber} handleOnChange={handleBarNumber} key={sectionIndex+''+ind} />
      </div>
      <div className="col-4">
        <CustomInputField placeholder={"Bar Weight"} value={details.barWeight} handleOnChange={handleBarWeight} key={sectionIndex+''+ind}/>
      </div>
      <div className="col-4">
        <CustomInputField placeholder={"Fineness"} value={details.fineness} handleOnChange={handleFineness} key={sectionIndex+''+ind}/>
      </div>
    </div>
  );
}

function renderAddBar(props) {
  return (
    <div
      className="d-flex mt-2"
      style={{ cursor: "pointer" }}
      onClick={() => props.addBar(props.index)}
    >
      <div className="addBarButton d-flex justify-content-center">
        <span className="addIcon" style={{ fontSize: 12 }}>
          +
        </span>
      </div>
      <p
        className="align-self-center pl-2 dark-color m-0"
        style={{ fontSize: 12 }}
      >
        Add Bar
      </p>
    </div>
  );
}
function renderAddBatch(props) {
  return (
    <div
      className="d-flex"
      style={{ cursor: "pointer" }}
      onClick={() => props.addBatch(props.index)}
    >
      <div className="addBatchButton d-flex justify-content-center">
        <span className="addIcon">+</span>
      </div>
      <p className="align-self-center pl-2 dark-color m-0 font-weight-500">
        Add Batch
      </p>
    </div>
  );
}

export default FirstSection;
