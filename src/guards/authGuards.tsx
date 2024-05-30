// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// interface Props {
//   privateValidation: boolean;
// }

// const PrivateValidationFragment = <Outlet />;
// const PublicValidationFragment = <Navigate replace to={"/"} />;

// export const AuthGuard = ({ privateValidation }: Props) => {

//   const userState = JSON.parse(localStorage.getItem('usuario'))
//   console.log(userState)

//   return userState ? (
//     privateValidation ? (
//       PrivateValidationFragment
//     ) : (
//       PublicValidationFragment
//     )
//   ) : (
//     <Navigate replace to={'/login'} />
//   );
// };

// export default AuthGuard;