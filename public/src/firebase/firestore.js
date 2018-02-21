var db = firebase.firestore();

function getAllDocuments(ev) {
  db.collection("Employees").get().then(function (querySnapshot) {
    var tblDocs = document.querySelector('.tblDocs');
    var output = `<table class='bordered'><thead><th>Name</th><th>Last</th><th>Age</th></thead><tbody>`;

    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      output += `
        <tr>
          <td>${doc.data().Name}</td>
          <td>${doc.data().Last}</td>
          <td>${doc.data().Age}</td>
        </tr>
      `;
    });

    output += `</tbody>
      </table>`;

    tblDocs.innerHTML = output;
  });

  ev.preventDefault();
}

function getDocument(doc) {

}

function addData(data) {
  db.collection("Employees").add(data)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}