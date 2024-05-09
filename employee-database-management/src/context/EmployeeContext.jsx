import { createContext, useState } from "react";
import PropTypes from "prop-types";
import employeeDetails from "../assets/empData.json";

export const EmployeeContext = createContext();

export const EmployeeContextProvider = ({ children }) => {
  const [empData, setEmpData] = useState(employeeDetails);

  const updateEmpData = (data) => {
    setEmpData([...empData, data]);
  };

  const removeEmp = (empId) => {
    const updatedEmpData = empData.filter((e) => e.empId !== empId);
    setEmpData(updatedEmpData);
  };

  return <EmployeeContext.Provider value={{ empData, updateEmpData, removeEmp }}>{children}</EmployeeContext.Provider>;
};

EmployeeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
