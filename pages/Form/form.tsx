import { TabView, TabPanel } from "primereact/tabview";
import NDX from "./ndx";
import Support from "./support";
import Activities from "./Activities";
import Evaluate from "./Evaluate";
import { Button } from 'primereact/button';
import Link from "next/link";
import Appbar from "@/component/Appbar";
import PatientData from "@/component/PatientData/PatientData";


interface ndx {
  name: string;
  key: Number;
}

export default function Form() {


  return (
    <div className="bg-stone-100 w-full">
      <h1 className="text-center text-3xl m-0">กรอกข้อมูล</h1>
      <div className="flex flex-col sm:mx-0 md:mx-8 pb-96">
        <PatientData/>
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
            <Button className="flex w-full md:w-2/12 mx-8 " label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
          </TabPanel>
        </TabView>
        </div>
      </div>
    </div>
  );
}
