import { getEmployeesWithVacation } from "./actions";
import EmployeePageClient from "./EmployeePageClient";

export default async function EmployeesPage() {
	const employees = await getEmployeesWithVacation();

	return <EmployeePageClient employees={employees} />;
}
