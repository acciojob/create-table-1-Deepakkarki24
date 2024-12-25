let table = document.querySelector("#sampleTable");
      let col1Num = 1;
      let col2Num = 2;
      function insert_Row() {
        //Write your code here
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");

        col1.innerText = `New Cell${col1Num}`;
        col2.innerText = `New Cell${col2Num}`;

        row.append(col1, col2);
        table.prepend(row);
        col2Num++;
        col1Num = col2Num;
        col2Num++;
      }