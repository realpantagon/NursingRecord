
export enum UNPROTECTED_API {
	signIn = "/api/login",
	PING = "/api/ping",
}

export enum PROTECTED_API {

	//Patient
	SEARCH_PATIENTS = "/api/patients/search",
	UPSERT_PATIENT = "/api/patients",

	//FieldCategory
	GET_FIELD_CATEGORIES = "/api/fieldCategories",
	UPSERT_FIELD_CATEGORY = "/api/fieldCategories",
	DELETE_FIELD_CATEGORY = "/api/fieldCategories/{id}",

	//FieldChoice
	GET_FIELD_CHOICES_BY_NDX = "/api/fieldCategories/ndx/{ndx_id}",
	UPSERT_FIELD_CHOICE= "/api/fieldCategories",
	DELETE_FIELD_CHOICE= "/api/fieldCategories/{id}",


	//Note 
	GET_NOTES = "api/notes/{id}",
	GET_NOTES_BY_PATIENT = "api/notes/patient/{patient_id}",
	UPSERT_NOTE = "api/notes",
	DELETE_NOTE = "api/notes/{id}",


	//Record
	GET_RECORDS = "api/records/{id}",
	GET_RECORDS_BY_PATIENT = "api/records/patient/{patient_id}",
	UPSERT_RECORD = "api/records",
	DELETE_RECORD = "api/records/{id}",

	//Ward
	GET_WARDS = "api/wards",
	UPSERT_WARD = "api/wards",
	DELETE_WARD = "api/wards/{id}",

	//UserOnPatient
	GET_LINKED_PATIENT = "api/userOnPatients/user/{user_id}/link",
	LINK_PATIENT = "api/userOnPatients/user/{user_id}/link/patient/{patient_id}",
	DELETE_LINKED_PATIENT = "api/userOnPatients/user/{user_id}/link/patient/{patient_id}",
}

