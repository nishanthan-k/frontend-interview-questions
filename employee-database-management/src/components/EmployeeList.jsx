import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import EmployeeInfo from "./EmployeeInfo";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeList = () => {
  const { empData, removeEmp } = useContext(EmployeeContext);
  const [selectedEmp, setSelectedEmp] = useState({});

  const setEmployee = (emp) => {
    setSelectedEmp(emp);
  };

  const empBar = (emp) => {
    return (
      <div key={emp.empId} className="border py-2 bg-slate-500 border-gray-300 mb-4 hover:cursor-pointer hover:bg-slate-400 flex justify-between px-8 items-center" onClick={() => setEmployee(emp)}>
        <h2 className="self-center">{emp.name}</h2>
        <RxCross2 className="text-xl" onClick={() => removeEmp(emp.empId)} />
      </div>
    );
  };

  return (
    <div className="flex w-full">
      <section className="w-1/4 height p-2 border bg-gray-200 border-gray-300 overflow-y-scroll">{empData.map((emp) => empBar(emp))}</section>
      <EmployeeInfo selectedEmp={selectedEmp} />
    </div>
  );
};

export default EmployeeList;
