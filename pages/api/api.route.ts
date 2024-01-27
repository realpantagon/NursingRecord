export enum UNPROTECTED_API {
	signIn = "/api/login",
	PING = "/api/ping",
}

export enum PROTECTED_API {
	SEARCH_PATIENTS = "/api/patients/search",
	RECORD_ID = "/api/records/{id}",
}
