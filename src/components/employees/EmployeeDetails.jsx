import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    // /customer/3
    // path="/customers/:customerId"

    const { employeeId } = useParams()  // {customerId: 3}

    return <div>Employee #{employeeId}</div>
}