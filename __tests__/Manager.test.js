const Employee = require("../lib/Manager")
const employee = new Employee("John","001","John@email.com", "123456789")

test("test constructor values from manager object", () => {
    expect(employee.officeNumber).toBe("123456789");
    
});

test("test the getRole() method", () => {
    expect(employee.getRole()).toBe("Manager")})

test("test the getSchool() method", () => {
    expect(employee.getOfficeNumber()).toBe("123456789")})