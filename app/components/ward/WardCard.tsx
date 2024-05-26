import { Ward } from "@/types/ward";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { MenuItem } from "primereact/menuitem";
import EditWard from "./EditWard";

const WardCard: React.FC<{ ward: Ward }> = ({ ward }) => {
	const menu = useRef<Menu>(null);
	const [editVisible, setEditVisible] = useState(false);

	const itemList: MenuItem[] = [
		{
			label: "แก้ไขชื่อ Ward",
			icon: "pi pi-fw pi-pencil",
			command: () => setEditVisible(true),
		},
		{ label: "Option 2", icon: "pi pi-fw pi-trash" },
	];

	const [wardName, setWardName] = useState(ward.group);

	return (
		<div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md relative">
			<Menu model={itemList} popup ref={menu} id="ward_menu" />
			<Button
				icon="pi pi-ellipsis-v"
				onClick={(event: any) => menu.current?.toggle(event)}
				className="p-button-rounded p-button-text absolute top-2 right-2 text-white bg-transparent"
			/>
			<Link
				href={`ward/${ward.ID}/searchPatient`}
				className="no-underline text-black block w-full h-full"
			>
				<div className="bg-blue-600 w-full h-40 rounded-t-lg"></div>
				<div className="mx-8 py-3">
					<div className="">{ward.group} </div>
				</div>
			</Link>
			<EditWard
				visible={editVisible}
				onHide={() => setEditVisible(false)}
				wardName={wardName}
				wardID={ward.ID}
			/>
		</div>
	);
};

export default WardCard;
