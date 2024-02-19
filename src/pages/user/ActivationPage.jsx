import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { activateUser } from "../../features/user/userSlice";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const { isError, message } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateUser(activation_token));
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default ActivationPage;
