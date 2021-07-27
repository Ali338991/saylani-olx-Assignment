import React, { useState, useEffect } from "react";
import { db, storage } from "./component/config/FirebaseConfig";

export default function CheckTest() {
  const [FileUrl, setFileUrl] = useState();
  const [User, setUser] = useState([]);

  const imgHandler = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref("img/");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log("ref", FileUrl);
  };

  const ctaHandler = (e) => {
    // e.preventDefault();
    const userName = e.target.userName.value;
    if (!userName) {
      return console.log("not");
    }
    db.collection("Ad").doc(userName).set({
      addName: userName,
      addPic: FileUrl,
    });
    e.preventDefault();
  };

  const fetchUser = async () => {
    const userCollection = await db.collection("Ad").get();
    setUser(
      userCollection.docs.map((doc) => {
        return doc.data();
      })
    );
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <form onSubmit={ctaHandler}>
        <input type="file" name="file" onChange={imgHandler} />

        <input type="text" name="userName" placeholder="userName" />

        <button>Submit</button>
      </form>

      <ul>
        {User.map((user) => {
          return (
            <li key={user.addName}>
              <img src={user.addPic} alt={user.addName} width="100" height="100" />
              <p>{user.addName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
