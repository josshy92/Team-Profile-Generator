const Employee = require("../lib/Engineer")
const employee = new Employee("John","001","John@email.com", "John001")

test("test constructor values from engineer object", () => {
    expect(employee.github).toBe("John001");
    
});

test("test the getRole() method", () => {
    expect(employee.getRole()).toBe("Engineer")})

test("test the getGithub() method", () => {
    expect(employee.getGitHub()).toBe("John001")})
