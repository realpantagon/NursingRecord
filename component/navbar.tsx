import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import styles from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Navbar() {
    const items: MenuItem[] = [
        // {
        //     label: 'File',
        //     icon: 'pi pi-fw pi-file',
        //     items: [
        //         {
        //             label: 'New',
        //             icon: 'pi pi-fw pi-plus',
        //             items: [
        //                 {
        //                     label: 'Bookmark',
        //                     icon: 'pi pi-fw pi-bookmark'
        //                 },
        //                 {
        //                     label: 'Video',
        //                     icon: 'pi pi-fw pi-video'
        //                 },

        //             ]
        //         },
        //         {
        //             label: 'Delete',
        //             icon: 'pi pi-fw pi-trash'
        //         },
        //         {
        //             separator: true
        //         },
        //         {
        //             label: 'Export',
        //             icon: 'pi pi-fw pi-external-link'
        //         }
        //     ]
        // },
        {
            // label: 'เพิ่มการบันทึกพยาบาล',
            label: 'ค้นหาผู้ป่วย',
            icon: 'pi pi-fw pi-pencil',
            url:'/search' 
            // items: [
            //     {
            //         label: 'Left',
            //         icon: 'pi pi-fw pi-align-left'
            //     },
            //     {
            //         label: 'Right',
            //         icon: 'pi pi-fw pi-align-right'
            //     },
            //     {
            //         label: 'Center',
            //         icon: 'pi pi-fw pi-align-center'
            //     },
            //     {
            //         label: 'Justify',
            //         icon: 'pi pi-fw pi-align-justify'
            //     },

            // ]
        },
        // {
        //     label: 'ผู้ป่วย',
        //     icon: 'pi pi-fw pi-user',
        //     items: [
                // {
                //     label: 'เพิ่มผู้ป่วยที่ต้องดูแล',
                //     icon: 'pi pi-fw pi-user-plus',

                // },
                // {
                //     label: 'ลบผู้ป่วยที่ต้องดูแล',
                //     icon: 'pi pi-fw pi-user-minus',

                // },
                // {
                //     label: 'ค้นหาผู้ป่วย',
                //     icon: 'pi pi-fw pi-users',
                //     url:'/search'
                    // items: [
                    //     {
                    //         label: 'Filter',
                    //         icon: 'pi pi-fw pi-filter',
                    //         items: [
                    //             {
                    //                 label: 'Print',
                    //                 icon: 'pi pi-fw pi-print'
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         icon: 'pi pi-fw pi-bars',
                    //         label: 'List'
                    //     }
                    // ]
                // }
            // ]
        // },
        // {
        //     label: 'Events',
        //     icon: 'pi pi-fw pi-calendar',
        //     items: [
        //         {
        //             label: 'Edit',
        //             icon: 'pi pi-fw pi-pencil',
        //             items: [
        //                 {
        //                     label: 'Save',
        //                     icon: 'pi pi-fw pi-calendar-plus'
        //                 },
        //                 {
        //                     label: 'Delete',
        //                     icon: 'pi pi-fw pi-calendar-minus'
        //                 }
        //             ]
        //         },
        //         {
        //             label: 'Archive',
        //             icon: 'pi pi-fw pi-calendar-times',
        //             items: [
        //                 {
        //                     label: 'Remove',
        //                     icon: 'pi pi-fw pi-calendar-minus'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     label: 'Quit',
        //     icon: 'pi pi-fw pi-power-off'
        // }
    ];

    const start = <Link href='/home'><img alt="logo" src="https://logowik.com/content/uploads/images/npm-inc7007.logowik.com.webp" height="40" className="mr-3"></img></Link>;
    const end = <InputText placeholder="ค้นหาผู้ป่วย" type="text" className="w-full" />;

    return (
        <div className="card">
            {/* <Menubar model={items} start={start} end    ={end} />  */}
            <Menubar model={items} start={start} /> 
        </div>
    )
}
