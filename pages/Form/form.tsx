import style from "../../styles/ndx.module.css";
import Navbar from "../../component/navbar";
import styles from "../../styles/home.module.css";
import { TabView, TabPanel } from "primereact/tabview";
import NDX from "./ndx";
import Support from "./support";
import Activities from "./Activities";
import Evaluate from "./Evaluate";
import { Button } from 'primereact/button';
import Link from "next/link";

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
        <div className="bg-white mx-4 my-4 rounded-md px-4 py-4 grid md:grid-cols-2  lg:grid-cols-5 items-center">
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
            <Support/>
          </TabPanel>
          <TabPanel header="กิจกรรมพยาบาล" className="mx-auto text-sm">
            <Activities/>
          </TabPanel>
          <TabPanel header="การประเมินผล" className="mx-auto text-sm">
            <Evaluate/>
            <div className="flex flex-row-reverse my-12">
              {/* <Link href="../patient"> */}
            <Button className="flex w-full md:w-2/12 mx-8 " label="Submit" icon="pi pi-check" iconPos="right" />
            {/* </Link> */}
            </div>
          </TabPanel>
        </TabView>
        </div>
      </div>
    </div>
  );
}
