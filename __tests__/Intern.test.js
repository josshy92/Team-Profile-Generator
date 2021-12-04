const Employee = require("../lib/Intern")
const employee = new Employee("John","001","John@email.com", "Yale")

test("test constructor values from intern object", () => {
    expect(employee.school).toBe("Yale");
    
});

test("test the getRole() method", () => {
    expect(employee.getRole()).toBe("Intern")})

test("test the getSchool() method", () => {
    expect(employee.getSchool()).toBe("Yale")})