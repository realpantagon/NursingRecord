import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useMutationUpsertWard } from "@/query/ward";

type Props = {
	visible: boolean;
	onHide: () => void;
	wardName: string;
	wardID: number;
};

export default function EditWard({ visible, onHide, wardName, wardID }: Props) {
	const [ward, setWardName] = useState(wardName);

	const mutateUpsertWard = useMutationUpsertWard();
	// Update the ward state whenever the wardName prop changes
	useEffect(() => {
		setWardName(wardName);
	}, [wardName]);

	const handleConfirm = () => {
		mutateUpsertWard.mutate({ ID: wardID, group: ward }); // Use the returned mutation function
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
				value={ward}
				onChange={(e) => setWardName(e.target.value)}
			/>
			<Button label="ตกลง" onClick={handleConfirm} />
		</Dialog>
	);
}
