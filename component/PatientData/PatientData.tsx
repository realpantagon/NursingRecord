import React from 'react'

function PatientData() {
  return (
    <div className="bg-white mx- my-4 rounded-md px-4 py-4 grid md:grid-cols-2 gap-3  lg:grid-cols-5 items-center">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <div className="my-2">เวลาบันทึก:</div>
        </div>
  )
}

export default PatientData