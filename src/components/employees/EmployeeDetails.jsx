import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    // /employee/3
    // path="/employees/:employeeId"

    const { employeeId } = useParams()  // {employeeId: 3}

    return <div>Employee #{employeeId}</div>
}