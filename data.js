var postAPI = 'http://localhost:3000/users'

fetch(postAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


async function loadIntroTable(postAPI, table){
    const   tableHead = table.querySelector("thead");
    const   tableBody = table.querySelector("tbody");
    const   response = await fetch(postAPI);
    const   {header, users} = await response.json();


   tableHead.innerHTML = "<tr></tr>";
   tableBody.innerHTML = "";

   for (const headerText of header){
       const headerElement = document.createElement("th");

       headerElement.textContent = headerText;
       tableHead.querySelector("tr").appendChild(headerElement);
   }

   for (const user of users){
    const rowElement = document.createElement("tr");

    for (const cellText of user){
        const cellElement = document.createElement("td");

        cellElement.textContent = cellText;
        rowElement.appendChild(cellElement);
    }
    tableBody.appendChild(rowElement);
   }

}

