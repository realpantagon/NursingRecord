import React from 'react'
import Link from 'next/link'

function PatientCard() {
  return (
    <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
    <Link href="../Form/form" className="no-underline text-black">
      <div className="mx-8 py-4">
        <div className="">ชื่อ:</div>
        {/* <div className="">ข้อวินิจฉัยโรค:</div> */}
        <div className="">เตียง:</div>
        <div className="">บันทึกล่าสุด:</div>
        <div className="">Admit Number:</div>
        <div className="">อายุ:</div>
      </div>
    </Link>
  </div>
  )
}

export default PatientCard