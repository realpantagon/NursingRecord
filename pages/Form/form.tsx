import style from "../../styles/ndx.module.css";
import Navbar from "../../component/navbar";
import styles from "../../styles/home.module.css";
import { TabView, TabPanel } from "primereact/tabview";
import NDX from "../Form/Ndx/ndx";

interface ndx {
  name: string;
  key: Number;
}

export default function form() {


  return (
    <div className="bg-gradient-to-b from-teal-300 to-indigo-300  h-full">
      <Navbar />
      <h1 className="text-center text-3xl m-0">กรอกข้อมูล</h1>
      {/* <div className={styles.contentcontainer}> */}
      <div className="flex flex-col sm:mx-0 md:mx-8 pb-96">
        <div className="bg-white mx-8 my-4 rounded-md px-8 py-4 grid md:grid-cols-2  lg:grid-cols-5 items-center">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <div className="my-2">เวลาบันทึก:</div>
        </div>
        <div className="rounded-lg pt-4 bg-white">
        <TabView >
          <TabPanel header="ข้อวินิจฉัย" className="mx-auto text-sm">
            <NDX/>
          </TabPanel>
          <TabPanel header="ข้อมูลสนับสนุน" className="mx-auto text-sm">
          
          </TabPanel>
          <TabPanel header="กิจกรรมพยาบาล" className="mx-auto text-sm">
            
          </TabPanel>
          <TabPanel header="การประเมินผล" className="mx-auto text-sm">
          
          </TabPanel>
        </TabView>
        </div>
      </div>
    </div>
  );
}
