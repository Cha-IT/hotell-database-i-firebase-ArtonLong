import { db } from "./firebaseconfig.js";
import {
  getFirestore,
  addDoc,
  setDoc,
  collection,
  doc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

async function addRoom(roomNum, floor, roomType, beds, available) {
  await setDoc(doc(db, "rom", roomNum), {
    floor: floor,
    roomType: roomType,
    beds: beds,
    available: available,
  });
}

addRoom("101", 1, "single", 2, true);
addRoom("102", 1, "single", 1, true);
addRoom("201", 2, "double", 3, false);
addRoom("202", 2, "suite", 1, true);
