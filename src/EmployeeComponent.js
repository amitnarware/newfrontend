

<div>
  <h1>Employee Data</h1>
  {/* Display the list of employees */}
  <ul>
    {employees.map((employee) => (
      <li key={employee.Emp_id}>
        {employee.Emp_name} - {employee.Dept} - {employee.Salary}
      </li>
    ))}
  </ul>

  {/* Form to add or update employee */}
  <h2>Add/Update Employee</h2>
  <input
    type="text"
    placeholder="Emp_id"
    value={empId}
    onChange={(e) => setEmpId(e.target.value)}
  />
  <input
    type="text"
    placeholder="Emp_name"
    value={empName}
    onChange={(e) => setEmpName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Dept"
    value={dept}
    onChange={(e) => setDept(e.target.value)}
  />
  <input
    type="number"
    placeholder="Salary"
    value={salary}
    onChange={(e) => setSalary(e.target.value)}
  />
  <button onClick={addData}>Add/Update Employee</button>

  {/* Form to delete an employee */}
  <h2>Delete Employee</h2>
  <input
    type="text"
    placeholder="Emp_id"
    value={empId}
    onChange={(e) => setEmpId(e.target.value)}
  />
  <button onClick={DeleteEmployee}>Delete Employee</button>
</div>