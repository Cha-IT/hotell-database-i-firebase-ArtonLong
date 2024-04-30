import { db } from "./firebaseconfig.js";

import {
  getFirestore,
  getDoc,
  getDocs,
  query,
  doc,
  collection,
  where,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

var allRooms = document.querySelector("#rooms");
var reloadBtn = document.querySelector("#reload");
var floorSelector = document.querySelector("#floor");
var typeSelector = document.querySelector("#roomType");
var bedsSelector = document.querySelector("#beds");
var availableSelector = document.querySelector("#ShowAvailable");

var selectedFloor = "none";
var selectedType = "none";
var selectedBeds = "none";
var selectedAvailable = false;

var i = 0;

document.getElementById("reload").addEventListener("click", function () {
  selectedFloor = floorSelector.value;
  selectedType = typeSelector.value;
  selectedBeds = bedsSelector.value;
  selectedAvailable = availableSelector.checked;

  reloadRooms(allRooms);
});

async function getRooms() {
  const rooms = await getDocs(query(collection(db, "rom")));

  rooms.forEach((room) => {
    i++;

    if (
      (room.data().floor == selectedFloor || selectedFloor == "none") &&
      (room.data().roomType == selectedType || selectedType == "none") &&
      (room.data().beds == selectedBeds || selectedBeds == "none") &&
      (room.data().available == true || selectedAvailable == true)
    ) {
      var roomBox = document.createElement("div");
      roomBox.id = "room" + i;
      roomBox.className = "roomBox";
      allRooms.appendChild(roomBox);

      var roomFloor = document.createElement("p");
      roomFloor.textContent = "Floor:     " + room.data().floor;
      document.getElementById(roomBox.id).appendChild(roomFloor);

      var roomType = document.createElement("p");
      roomType.textContent = "Type:     " + room.data().roomType;
      document.getElementById(roomBox.id).appendChild(roomType);

      var roomBeds = document.createElement("p");
      roomBeds.textContent = "Beds:     " + room.data().beds;
      document.getElementById(roomBox.id).appendChild(roomBeds);

      var roomAvailable = document.createElement("p");
      if (room.data().available == true) roomAvailable.textContent = "Avalible";
      else roomAvailable.textContent = "Unavalible";
      document.getElementById(roomBox.id).appendChild(roomAvailable);

      console.log(room.data());
    }
  });
  i = 0;
}
function reloadRooms(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  getRooms();
}

getRooms();
