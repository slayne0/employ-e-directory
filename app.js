const $employeesWrapper = document.querySelector(".employees-wrapper")

// const employee = {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg"
// }



$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });


const employees = [
    {
        id: 1,
        firstName: "Billo",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    },
    {
        id: 1,
        firstName: "Billy",
        lastName: "Krenzer",
        email: "billyK@contact.fr",
        role: "Dev",
        picture: "./user.jpg"
    }
]

employees.forEach(function(employee) {
    const $employeeCard = document.createElement("div")
    $employeeCard.classList.add("employee-card")
    
    const $employeePicture = document.createElement("img")
    $employeePicture.src = employee.picture
    
    const $employeeInfos = document.createElement("ul")
    $employeeInfos.classList.add("employee-infos")
    
    const $employeeFullname = document.createElement("li")
    $employeeFullname.classList.add("employee-fullname")
    $employeeFullname.textContent = employee.firstName + " " + employee.lastName
    
    $employeeInfos.appendChild($employeeFullname)
    $employeeCard.appendChild($employeePicture)
    $employeeCard.appendChild($employeeInfos)
    $employeesWrapper.appendChild($employeeCard)
})