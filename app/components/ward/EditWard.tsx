import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useMutationUpdateWard } from "@/query/ward";
import { UpdateWardBody } from "@/types/ward";

type Props = {
	visible: boolean;
	onHide: () => void;
	ward: UpdateWardBody
};

export default function EditWard({ visible, onHide, ward }: Props) {
	const [wardName, setWardName] = useState(ward.group);
	const mutateUpdateWard = useMutationUpdateWard();
	
	const handleConfirm = async() => {
		const { group, ...other } = ward;
		await mutateUpdateWard.mutateAsync({ group:wardName, ...other });
		onHide();
	};

	return (
		<Dialog
			header="แก้ไขชื่อกลุ่มโรค"
			visible={visible}
			style={{ width: "80vw" }}
			className=""
			onHide={onHide}
		>
			<InputText
				placeholder="ชื่อกลุ่มโรค"
				value={wardName}
				onChange={(e) => setWardName(e.target.value)}
			/>
			<Button label="ตกลง" onClick={handleConfirm} />
		</Dialog>
	);
}
