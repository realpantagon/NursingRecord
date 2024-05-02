export enum UNPROTECTED_API {
  LOGIN = "/v1/login",
  LOGOUT = "/v1/logout",
  PING = "/v1/ping",
}

export enum PROTECTED_API {
  //Auth
  CHECK_AUTH = "/v1/check-auth",
  //Patient
  SEARCH_PATIENTS = "/v1/patients/search",

  //FieldCategory
  GET_FIELD_CATEGORIES = "/v1/fieldCategories",
  UPSERT_FIELD_CATEGORY = "/v1/fieldCategories",
  DELETE_FIELD_CATEGORY = "/v1/fieldCategories/{id}",

  //FieldChoice
  GET_FIELD_CHOICES_BY_NDX = "/v1/fieldCategories/ndx/{ndx_id}",
  UPSERT_FIELD_CHOICE = "/v1/fieldCategories",
  DELETE_FIELD_CHOICE = "/v1/fieldCategories/{id}",

  //Note
  GET_NOTES = "/v1/notes/{id}",
  GET_NOTES_BY_PATIENT = "/v1/notes/patient/{patient_id}",
  UPSERT_NOTE = "/v1/notes",
  DELETE_NOTE = "/v1/notes/{id}",

  //Record
  GET_RECORDS = "/v1/records/{id}",
  GET_RECORDS_BY_PATIENT = "/v1/records/patient/{patient_id}",
  UPSERT_RECORD = "/v1/records",
  DELETE_RECORD = "/v1/records/{id}",

  //Ward
  GET_WARDS = "/v1/wards",
  UPSERT_WARD = "/v1/wards",
  DELETE_WARD = "/v1/wards/{id}",

  //Ndx
  GET_NDXS = "/v1/ndxs",
  UPSERT_NDX = "/v1/ndxs",
  //USER
  GET_ME = "/v1/users/me",
}
