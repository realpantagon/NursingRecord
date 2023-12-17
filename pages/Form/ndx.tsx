import style from '../../styles/ndx.module.css';
import Navbar from './../../component/navbar';

export default function Ndxform(){
    return(
        <div className="bg-gradient-to-b from-teal-400 to-indigo-400  h-screen">
            <Navbar/>
            <h1 className="text-center text-3xl ">กรอกข้อมูล</h1>
        </div>
    )
}