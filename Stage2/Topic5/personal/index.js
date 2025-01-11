const submitBtn = document.querySelector("#submitBtn");
const table = document.querySelector("table");

// localStore
const stringData = localStorage.getItem("my_todo_data");
const data = stringData ? JSON.parse(stringData) : [];

console.log("data", data);

submitBtn.addEventListener("click", handlePersonalForm);

function handlePersonalForm() {
  const userFullname = document.querySelector("#userFullname");
  const userJobTitle = document.querySelector("#userJobTitle");
  const userSalary = document.querySelector("#userSalary");
  const date = new Date(); //? return timestamp

  const personalForm = {
    fullname: userFullname.value,
    job_title: userJobTitle.value,
    salary: userSalary.value,
    created_at: date,
  };

  userFullname.value = "";
  userJobTitle.value = "";
  userSalary.value = "";

  data.push(personalForm);

  //localStore
  localStorage.setItem("my_todo_data", JSON.stringify(data));

  console.log("click", personalForm);
  console.log("data", data);

  renderTable();
}

function renderTable() {
  const dataTable = data.map(function (item, index) {
    const { fullname, job_title, salary, created_at } = item;

    const time = convertToData(created_at);

    return `
           <tr>
                <th scope="row">${index + 1}</th>
                <td>${fullname}</td>
                <td>${job_title}</td>
                <td>${salary}$</td>
                <td>${time}</td>
              </tr>
        `;
  });

  const strTableData = dataTable.join("");

  console.log("strTableData", strTableData);

  document.querySelector("#listEl").innerHTML = strTableData;
}

function convertToData(date) {
  const dateTime = new Date(date);

  const day = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();

  return `${day}.${month}.${year}`;
}

table.addEventListener("mouseenter", function () {
  if (data.length > 0) {
    alert("Good job");
  } else {
    alert("Empty table");
  }
});

renderTable();
