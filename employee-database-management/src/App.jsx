import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import { EmployeeContextProvider } from "./context/EmployeeContext";

function App() {
  return (
    <EmployeeContextProvider>
      <div className="p-4 bg-bgColor text-textColor h-dvh w-screen">
        <Header />
        <section className="w-full mt-5">
          <div className="w-full">
            <EmployeeList />
          </div>
        </section>
      </div>
    </EmployeeContextProvider>
  );
}

export default App;
