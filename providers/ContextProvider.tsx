// "use client";
// import React, { createContext, useState } from "react";

// export const WardIdContext = createContext<{
//   wardId: number;
//   setWardId: React.Dispatch<React.SetStateAction<number>>;
// }>({ wardId: 0, setWardId: () => {} });

// export const PatientIdContext = createContext<{
//   patientId: number;
//   setPatientId: React.Dispatch<React.SetStateAction<number>>;
// }>({ patientId: 0, setPatientId: () => {} });

// export const ContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [wardId, setWardId] = useState(0);
//   const [patientId, setPatientId] = useState(0);

//   return (
//     <PatientIdContext.Provider value={{ patientId, setPatientId }}>
//       <WardIdContext.Provider value={{ wardId, setWardId }}>
//         {children}
//       </WardIdContext.Provider>
//     </PatientIdContext.Provider>
//   );
// };
