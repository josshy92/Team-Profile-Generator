// layout for html page
const generateTeam = (userTeam) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <main>
    <div class="text-center p-3 mb-2 bg-info text-dark"> My Team</div>
        <div>
        <div class="row">
        ${userTeam}
        </div>
    </main>
    <script src="index.js"></script>
</body>
</html>
`};

// render the different position and details to the page
const renderMang = (managerInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${managerInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">ID: ${managerInfo.id}</p>
      <p>Email: <a href="mailto:${managerInfo.email}"> ${managerInfo.email}</a> </p>
      <p class="card-text">Office Number: ${managerInfo.officeNumber}</p>
      </div>
    </div>
`}
const renderInt = (internInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${internInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">ID: ${internInfo.id}.</p>
      <p> Email:<a href="mailto:${internInfo.email}">${internInfo.email}</a> </p>
      <p class="card-text">School: ${internInfo.school}</p>
      </div>
      </div>
      `
}
const renderEng = (engineerInfo) => {
    return `
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">${engineerInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">ID: ${engineerInfo.id}.</p>
      <p> Email: <a href="mailto:${engineerInfo.email}">${engineerInfo.email}</a></p>
      <p class="card-text">Github: <a href="https://github.com/${engineerInfo.github}">${engineerInfo.github}</a></p>
      </div>
      </div>
    `
}

// grab the appropriate data coming in from team
const renderHTML = (team) => {
    let employees = [];
    for (let i = 0; i < team.length; i++) {
        const workers = team[i]
        const position = workers.getRole();

        if (position === "Manager") {
            const managerDiv = renderMang(workers)
            employees.push(managerDiv)
        }
        if (position === "Intern") {
            const internDiv = renderInt(workers)
            employees.push(internDiv)
        }
        if (position === "Engineer") {
            const engineerDiv = renderEng(workers)
            employees.push(engineerDiv)
        }
    }
    const userTeam = employees
    const employeeInfo = generateTeam(userTeam)
    return employeeInfo
}

//export doc to be referenced in another
module.exports = renderHTML;