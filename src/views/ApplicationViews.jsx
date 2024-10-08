import { NavBar } from "../components/nav/NavBar";
import { CustomerList } from "../components/customers/CustomersList";
import { EmployeeList } from "../components/employees/EmployeeList";
import { TicketList } from "../components/tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { useState, useEffect } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, [setCurrentUser]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* /customers/:customerId */}
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
