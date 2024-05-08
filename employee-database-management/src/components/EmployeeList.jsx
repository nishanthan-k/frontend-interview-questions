import { useState } from "react";
import empDetail from "../assets/empData.json";
import { RxCross2 } from "react-icons/rx";

const EmployeeList = () => {
  const [empData, setEmpData] = useState(empDetail);

  const removeEmp = (empId) => {
    const updatedEmpData = empData.filter((e) => e.empId !== empId);
    setEmpData(updatedEmpData);
  };

  const empBar = (emp) => {
    return (
      <div
        key={emp.empId}
        className="border py-2 border-gray-300 mb-4 flex justify-between px-8 items-center"
      >
        <h2 className="self-center">{emp.name}</h2>
        <RxCross2 className="text-xl" onClick={() => removeEmp(emp.empId)} />
      </div>
    );
  };

  return (
    <section className="max-h-2/3 border border-red-800 overflow-y-scroll">
      {empData.map((emp) => empBar(emp))}
    </section>
  );
};

export default EmployeeList;
