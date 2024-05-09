import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { EmployeeContext } from "../context/EmployeeContext";

const AddEmployeeForm = ({ addEmpHandler }) => {
  const { updateEmpData } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    name: "123",
    empId: 110,
    role: "123",
    exp: 1,
    profileImg: "",
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateEmpData(formData);
    addEmpHandler(); // close the form
  };

  return (
    <div className="absolute w-2/3 h-max bg-gray-500 shadow-lg p-4 inset-1/4 mt-10">
      <form className="flex flex-col gap-4 mt-6">
        <input className="w-full h-9 px-2 border border-black text-black" required type="text" placeholder="Enter the name" value={formData.name} name="name" id="name" onChange={inputHandler} />

        <input className="w-full h-9 px-2 border border-black text-black" required type="number" placeholder="Eployee Id" value={formData.empId} name="empId" id="empId" onChange={inputHandler} />

        <input className="w-full h-9 px-2 border border-black text-black" required type="text" placeholder="Enter the role" value={formData.role} name="role" id="role" onChange={inputHandler} />

        <input className="w-full h-9 px-2 border border-black text-black" required type="number" placeholder="Experience in Years" value={formData.exp} name="exp" id="exp" onChange={inputHandler} />

        <fieldset>
          <label htmlFor="userProfile" className="text-white">
            Profile Image:
          </label>
          <input className="ml-10" type="file" accept="image/*" onChange={inputHandler} value={formData.profileImg} name="profileImg" id="profileImg" />
        </fieldset>

        <button type="submit" className="p-2 bg-sky-500 hover:bg-sky-600" onClick={(e) => submitHandler(e)}>
          Add Employee
        </button>
      </form>

      <MdOutlineClose onClick={() => addEmpHandler()} className="text-2xl text-white absolute top-2 hover:cursor-pointer right-4" />
    </div>
  );
};

AddEmployeeForm.propTypes = {
  addEmpHandler: PropTypes.func.isRequired,
};

export default AddEmployeeForm;
