export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to collect employee names
  const employees = [];

  // Iterate through the iterator object to collect employee names
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
