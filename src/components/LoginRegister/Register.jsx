import React, { useState } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.file.files[0];

    try {
      // https://firebase.google.com/docs/auth/web/password-auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // https://firebase.google.com/docs/storage/web/upload-files#upload_from_a_byte_array
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <div className="form-border">
        <div className="form-box">
          <span className="logo">Chateth</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" />
            <input
              type="email"
              name="email"
              placeholder="example@chateth.com"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />

            <input
              style={{ display: "none" }}
              type="file"
              id="myfile"
              name="file"
            />
            <label className="file-input" htmlFor="myfile">
              Select Profile Picture
            </label>
            <button>
              <h3>Sign up</h3>
            </button>
            {err && <span>Something went wrong.</span>}
          </form>
          <p>
            Have an account?{" "}
            <button
              className="persona-button"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
