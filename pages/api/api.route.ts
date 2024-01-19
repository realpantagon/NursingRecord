export enum UNPROTECTED_API {
	signIn = "/api/login",
}

export enum PROTECTED_API {
	search_Patients = "/api/patients/search",
	ping = "/api/ping",
	RECORD_ID = "/api/records/{id}",
}
