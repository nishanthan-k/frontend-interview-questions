import PropTypes from "prop-types";
import defaultProfile from "../../public/user-profile.png";

const EmployeeInfo = ({ selectedEmp }) => {
  const { name, role, exp, profileImg } = selectedEmp;

  return (
    <div className="flex flex-col items-center bg-gray-200 gap-8 py-4 w-3/4">
      {name ? (
        <>
          <img alt="User Profile" className="w-1/3 imgBorderRadius object-contain p-2 border border-black  " src={profileImg || defaultProfile} />
          <div className="text-black text-center">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="text-xl">{role}</p>
            <p className="text-md">{exp} years exp</p>
          </div>
        </>
      ) : (
        <h2 className="text-black text-2xl font-medium">Select an employee from the list</h2>
      )}
    </div>
  );
};

EmployeeInfo.propTypes = {
  selectedEmp: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    exp: PropTypes.number,
    profileImg: PropTypes.string,
  }),
};

export default EmployeeInfo;
