import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import {
	ColorPicker,
	ColorPickerChangeEvent,
	ColorPickerRGBType,
	ColorPickerHSBType,
} from "primereact/colorpicker";
import { Button } from "primereact/button";
import { useMutationUpsertWard } from "@/query/ward";

interface CreateWardProps {
	visible: boolean;
	onClose: () => void;
}

const CreateWard: React.FC<CreateWardProps> = ({ visible, onClose }) => {
	const [color, setColor] = useState<string>("#000000");
	const [wardName, setWardName] = useState<string>("");
	const mutateUpsertWard = useMutationUpsertWard(); // Call the hook here

	useEffect(() => {
		if (!visible) {
			setColor("#000000");
			setWardName("");
		}
	}, [visible]);

	const handleColorChange = (e: ColorPickerChangeEvent) => {
		const newColor = e.value as
			| string
			| ColorPickerRGBType
			| ColorPickerHSBType;
		if (typeof newColor === "string") {
			setColor(newColor);
		} else {
			setColor("#FFFFFF");
		}
	};

	const handleConfirm = () => {
		mutateUpsertWard.mutate({ group: wardName }); // Use the returned mutation function
		onClose();
	};

	return (
		<Dialog
			header="เพิ่มกลุ่มโรค"
			visible={visible}
			style={{ width: "80vw" }}
			onHide={onClose}
			className=""
		>
			<div className="grid grid-cols-1 gap-4">
				<p>ระบุชื่อกลุ่มโรคและเลือกสี</p>
				<div className="flex">
					<InputText
						placeholder="ชื่อกลุ่มโรค"
						value={wardName}
						onChange={(e) => setWardName(e.target.value)}
					/>
					<div className="ml-4 mt-2">
						<ColorPicker value={color} onChange={handleColorChange} />
					</div>
				</div>
				<Button label="ตกลง" onClick={handleConfirm} />
			</div>
		</Dialog>
	);
};

export default CreateWard;
