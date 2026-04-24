let db;
const request = indexedDB.open("PortalDB", 1);
request.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore("users", { keyPath: "username" });
};
request.onsuccess = e => db = e.target.result;