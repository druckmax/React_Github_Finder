import React from "react";
import { useContext } from "react";
import { AlertContext } from "../contexts/alert/AlertContext";
import { BiErrorCircle } from "react-icons/bi";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-center mb-4 space-x-2">
        {alert.type === "error" && (
          <BiErrorCircle style={{ color: "#F91C1C", fontSize: "1.5rem" }} />
        )}
        <p className="flex-1 text-base leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
