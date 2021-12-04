const Employee = require("../lib/Employee")
const employee = new Employee("John","001","John@email.com")

test("test constructor values from employee object", () => {
    expect(employee.name).toBe("John");
    expect(employee.id).toBe("001");
    expect(employee.email).toBe("John@email.com");

});

test("test the getName() method", () => {
    expect(employee.getName()).toBe("John")})

test("test the getName() method", () => {
    expect(employee.getId()).toBe("001")})

test("test the getName() method", () => {
    expect(employee.getEmail()).toBe("John@email.com")})
    
test("test the getName() method", () => {
    expect(employee.getRole()).toBe("Employee")})
