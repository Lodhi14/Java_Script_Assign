function Table() {
    //Build an array containing Customer records.
    var person = new Array();
    person.push(["Name", "Age", "Dob", "Email", "Company"]);
    person.push(["Kunal", "17", "17-07-2004","kunal@gmail.com", "acc"]);
    person.push(["Mudassar", "45", "27-09-1976", "mudassar@gmail.com","gem"]);
    person.push(["Suhana", "23", "14-09-2000", "suhana@gmail.com", "mini"]);
    person.push(["Robert", "22","08-06-2001", "robert@gmail.com", "gini"]);
    person.push(["Alika", "45","23-06-1977", "alika@gmail.com","gemini"])

    var table = document.createElement("TABLE");
    table.border = "1";

    
    var columnCount = person[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = person[0][i];
        row.appendChild(headerCell);
    }
    for (var i = 1; i < person.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = person[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}