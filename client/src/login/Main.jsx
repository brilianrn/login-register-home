import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../commons/assets/images';
import "./style/login.style.css";
import { useDispatch } from "react-redux";
import { setUserLoginAsync } from '../store/actions/user.action';
import swal from "sweetalert";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [])

  function login(event) {
    event.preventDefault();
    let title = "";
    let text = "";
    let icon = "";
    let button = "OK";

    try {
      dispatch(setUserLoginAsync({ email: form.email, password: form.password, navigate }));
    } catch (_) {
      title = "Peringatan!";
      text = "Maaf, email Anda tidak valid";
      icon = "error";

      swal({
        title,
        text,
        icon,
        button
      });
    }
  }

  return (
    <div class="wrapper">
      <div class="logo">
        <img src={LOGIN} alt="login" />
      </div>
      <div class="text-center mt-4 name">SIGN IN CUSTOMER</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
          </span>
          <input type="text" name="userName" id="userName" placeholder="email" onChange={(event) => { setForm({ ...form, email: event.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </span>
          <input type="password" name="password" id="pwd" placeholder="password" onChange={(event) => { setForm({ ...form, password: event.target.value }) }} />
        </div>
        <Link to="/">
          <button class="btn mt-3" onClick={(event) => login(event)}>Login</button>
        </Link>
      </form>
      <div class="text-center fs-6">
        Don't have account ?
        <Link to="/register">
          <a href="#"> Sign up</a>
        </Link> or <br />
        <Link to="/admin/login">
          <a href="#"> Sign In Admin</a>
        </Link>
      </div>
    </div>
  )
}
