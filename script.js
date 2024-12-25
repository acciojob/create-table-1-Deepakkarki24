let table = document.querySelector("#sampleTable");
      function insert_Row() {
        //Write your code here
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");

        col1.innerText = "New Cell1";
        col2.innerText = "New Cell2";

        row.append(col1, col2);
        table.prepend(row);
      }