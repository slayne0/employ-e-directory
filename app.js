const $employeesWrapper = document.querySelector(".employees-wrapper");

// const employee = {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg"
// }



// const employees = [
//   {
//     id: 1,
//     firstName: "Billo",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
//   {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg",
//   },
// ];

let employees


fetch("https://randomuser.me/api/?results=10")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data.results);

    employees = data.results
    console.log(employees)

    employees.forEach(function (employee) {
        const $employeeCard = document.createElement("div");
        $employeeCard.classList.add("employee-card");
        
        $employeeCard.addEventListener("click", function() {
            console.log("qsdqd")
            $employeeCard.classList.add("big")
        })
      
        const $employeePicture = document.createElement("img");
        $employeePicture.src = employee.picture.thumbnail;
      
        const $employeeInfos = document.createElement("ul");
        $employeeInfos.classList.add("employee-infos");
      
        const $employeeFullname = document.createElement("li");
        $employeeFullname.classList.add("employee-fullname");
        $employeeFullname.textContent = employee.name.first + " " + employee.name.last;
      
        $employeeInfos.appendChild($employeeFullname);
        $employeeCard.appendChild($employeePicture);
        $employeeCard.appendChild($employeeInfos);
        $employeesWrapper.appendChild($employeeCard);
      });




        employee.addEventListener("click", function() {
        console.log($employeeCard)
        $employeee.classList.add("big")
      })

  })



  .catch(function (err) {
    console.log("une erreur est survenue!!!", err);
  });

