export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      if (Array.isArray(department)) {
        for (const employee of department) {
          yield employee;
        }
      } else {
        throw new TypeError('Department is not an array');
      }
    }
  }
  return employeeGenerator();
}
