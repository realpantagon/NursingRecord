import React, { useRef, useState } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { log } from 'console';


interface ConfirmFocusProps {
    support: string;
    activities: string;
    evaluate: string;
    clearForm: () => void;
}   


const ConfirmFocus: React.FC<ConfirmFocusProps> = ({ support, activities, evaluate, clearForm }) => {
    const toast = useRef<Toast>(null);

    const reject = () => {
        toast.current?.show({
            severity: 'warn',
            summary: 'Rejected',
            detail: 'ข้อมูลยังไม่มีการเปลี่ยนแปลง',
            life: 1000,
            
        });
    };

    const confirmSave = () => {
        confirmDialog({
            message: 'บันทึกข้อมูล Focus Problem?',
            header: 'Confirmation',
            icon: 'pi pi-check-square',
            accept:()=>{
                toast.current?.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'บันทึกข้อมูลสำเร็จ',
                    life: 1000,
                });
            },
            reject,
            defaultFocus: 'accept',
            position:'center'
        });
        console.log("send",{support, activities, evaluate})
        //send
    };

    const confirmClear = () => {
        confirmDialog({
            message: 'ล้างข้อมูล Focus Problem',
            header: 'Clear Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'ล้างแบบฟอร์ม',
            rejectLabel: 'No',
            acceptClassName: 'p-button-danger',
            accept: () => {
                clearForm(); // Use clearForm prop here
                toast.current?.show({
                    severity: 'info',
                    summary: 'Cancelled',
                    detail: 'ล้างแบบฟอร์มสำเร็จ',
                    life: 1000,
                });
            },
            reject,
            defaultFocus: 'reject',
            position:'center'
        });
        console.log({support, activities, evaluate});

    };
    

    return (
        <>
            <Toast ref={toast} position="bottom-right"/>
            <ConfirmDialog />
            <div className="card flex justify-between">
                <Button onClick={confirmSave} icon="pi pi-save" label="บันทึกแบบฟอร์ม" className="p-button-info mr-2" />
                <Button onClick={confirmClear} icon="pi pi-trash" label="ล้างแบบฟอร์ม" className="p-button-danger" outlined />
            </div>
        </>
    );
}

export default ConfirmFocus;


