export enum UNPROTECTED_API {
	LOGIN = "/api/login",
	PING = "/api/ping",
}

export enum PROTECTED_API {

  //Auth
  CHECK_AUTH = "/api/v1/check-auth",
  //Patient
  SEARCH_PATIENTS = "/api/v1/patients/search",

  //FieldCategory
  GET_FIELD_CATEGORIES = "/api/v1/fieldCategories",
  UPSERT_FIELD_CATEGORY = "/api/v1/fieldCategories",
  DELETE_FIELD_CATEGORY = "/api/v1/fieldCategories/{id}",

  //FieldChoice
  GET_FIELD_CHOICES_BY_NDX = "/api/v1/fieldCategories/ndx/{ndx_id}",
  UPSERT_FIELD_CHOICE = "/api/v1/fieldCategories",
  DELETE_FIELD_CHOICE = "/api/v1/fieldCategories/{id}",

  //Note
  GET_NOTES = "api/v1/notes/{id}",
  GET_NOTES_BY_PATIENT = "api/v1/notes/patient/{patient_id}",
  UPSERT_NOTE = "api/v1/notes",
  DELETE_NOTE = "api/v1/notes/{id}",

  //Record
  GET_RECORDS = "api/v1/records/{id}",
  GET_RECORDS_BY_PATIENT = "api/v1/records/patient/{patient_id}",
  UPSERT_RECORD = "api/v1/records",
  DELETE_RECORD = "api/v1/records/{id}",

  //Ward
  GET_WARDS = "api/v1/wards",
  UPSERT_WARD = "api/v1/wards",
  DELETE_WARD = "api/v1/wards/{id}",

  //Ndx
  GET_NDXS = "api/v1/ndxs",
  UPSERT_NDX = "api/v1/ndxs",
  //USER
  GET_ME = "/api/v1/users/me",
}
