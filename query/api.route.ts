export enum UNPROTECTED_API {
  LOGIN = "/api/login",
  PING = "/api/ping",
}

export enum PROTECTED_API {
  //Auth
  CHECK_AUTH = "/api/check-auth",
  //Patient
  SEARCH_PATIENTS = "/api/patients/search",

  //FieldCategory
  GET_FIELD_CATEGORIES = "/api/fieldCategories",
  UPSERT_FIELD_CATEGORY = "/api/fieldCategories",
  DELETE_FIELD_CATEGORY = "/api/fieldCategories/{id}",

  //FieldChoice
  GET_FIELD_CHOICES_BY_NDX = "/api/fieldCategories/ndx/{ndx_id}",
  UPSERT_FIELD_CHOICE = "/api/fieldCategories",
  DELETE_FIELD_CHOICE = "/api/fieldCategories/{id}",

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

  //Ndx
  GET_NDXS = "api/ndxs",
  UPSERT_NDX = "api/ndxs",
  //USER
  GET_ME = "/api/users/me",
}
