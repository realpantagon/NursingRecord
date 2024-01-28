import Image from "next/image";
import cpe from "../public/logo cpe.jpeg";
import ent from "../public/ent logo.jpeg";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "@/styles/loginpage.module.css";

import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import navbar from "@/component/navbar";
import useAuth from "./api/auth/useAuth";
import { log } from "console";

export default function Loginpage() {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const { signIn, error } = useAuth();

	const handleLogin = async (e: any) => {
		e.preventDefault();

		await signIn(username, password);
	};
	return (
		<div className={styles.container}>
			<div className={styles.boxsideboxcontainer}>
				<div className={styles.sidebox}>
					<div className={styles.img}>
						<div className={styles.text2}>
							<div>
								<Image src={cpe} alt="Logo" width={100} />
								<Image src={ent} alt="Logo" width={100} />
							</div>
							<span>มหาวิทยาลัยเชียใหม่ คณะวิศวกรรมศาสตร์</span>
							<span>ภาควิชาคอมพิวเตอร์</span>
						</div>
					</div>
				</div>
				<div className={styles.box}>
					<div className={styles.text}>
						<span className={styles.engtext}>NURSING RECORD</span>
						<span>ระบบจัดการการบันทึกทางพยาบาล</span>
					</div>
					<div className={styles.username}>
						<div className="card flex justify-content-center">
							<span className="p-float-label p-input-icon-right">
								<i className="pi pi-user" />
								<InputText
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								<label htmlFor="username">Username</label>
							</span>
						</div>
					</div>
					<div className={styles.password}>
						<div className="card flex justify-content-center">
							<span className="p-float-label">
								
								<Password
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									toggleMask
									feedback={false}
								/>
								<label htmlFor="password">Password</label>
							</span>
						</div>
					</div>
					<div className={styles.loginbutton}>
						{/* <Link href="home"> */}
						<Button
							fullWidth
							variant="gradient"
							gradient={{ from: "teal", to: "lime", deg: 90 }}
							onClick={(e) => {
								notifications.show({
									title: "Default notification",
									message: "Hey there, your code is awesome! 🤥 ",
									autoClose: 1500,
								});
								handleLogin(e);
							}}
						>
							Login
						</Button>
						{/* </Link> */}
					</div>
				</div>
			</div>
		</div>
	);
}
