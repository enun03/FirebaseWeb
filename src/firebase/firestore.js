var db = firebase.firestore();

function getAllDocuments() {
  db.collection("Employees").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      debugger;
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });
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