export default function createReportObject(employeesList) {
	const allStaff = {
		allEmployees: {...employeesList},
		getNumberOfDepartments(employeesList){
			return Object.keys(employeesList).length;
		}
	}
	return allStaff;
}
