let alldata = document.getElementById("alldata");
const db = firebase.firestore();


db.collection("users").onSnapshot(
  /// i want a function jo ye onshnapshot wali value lega aur mujhe provide krega
  function (snapshot) {
    snapshot.docChanges().forEach(
      function (change) {
        if (change.type === "added") {
          console.log(change.doc.data());
          let html = `
                 <div class="col mb-4">
                 <div class="card">
                   <div class="card-body">
                     <h5 class="card-title">${change.doc.data().name}</h5>
                     <p class="card-text">
                     ${change.doc.data().email}
                     </p>
                     <p class="card-text">
                      ${change.doc.data().address}
                     </p>
                      <p class="card-text">
                  ${change.doc.data().phone}
                       </p>
                     </div>
                   </div>
                 </div>`;
          alldata.insertAdjacentHTML("afterbegin", html);
          //if addded wal document
        }
        //change function code
      }
      //for each k andard
    );
    //this is my snashot function
  }
);