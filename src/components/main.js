import '../css/main.css';
import React, {useState} from 'react';
import Section from './section'

function Main() {
  const [data,setData] = useState([{barDetails:[{}],batchNumber:''}])

  const addBar=(index)=>{
    let list = data
    list[index].barDetails.push({})
    setData([...list])
  }

  const addBatch=()=>{
    setData([...data,{barDetails:[{}],batchNumber:''}])

  }

  const updateData=(list)=>{
    setData([...list])
  }
  return (
    <div className="container my-4">
      <div className="d-flex flex-column justify-content-center">
      <h6 className="dark-color text-center mb-4">Add Batch & Bar Information</h6>
      {/* First section rending */}
      {
        data.map((section,index)=><Section section={section} data = {data} updateData={updateData} index={index} addBar={addBar} addBatch={addBatch}/>)
      }
      </div>
    </div>
  );
}

export default Main;
