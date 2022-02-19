import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { customerRegister } from '../store/actions/user.action';
import "./style/register.style.css";

export default function Main() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    nick_name: "",
    dob: "",
    address: "",
    photo: "",
    email: "",
    password: ""
  });

  function register(event) {
    event.preventDefault();
    let title = "";
    let text = "";
    let icon = "";
    let button = "OK";

    try {
      customerRegister({
        full_name: form.full_name,
        nick_name: form.nick_name,
        dob: form.dob,
        address: form.address,
        photo: form.photo,
        email: form.email,
        password: form.password,
        navigate
      });
    } catch (err) {
      console.log(err)
      title = "Peringatan!";
      text = "Invalid form";
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
      <div class="text-center mt-4 name">SIGN UP</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
          <input type="text" name="userName" id="userName" placeholder="full name" onChange={(event) => { setForm({ ...form, full_name: event.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </span>
          <input type="text" name="userName" id="userName" placeholder="nick name" onChange={(event) => { setForm({ ...form, nick_name: event.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </span>
          <input type="date" name="userName" id="userName" placeholder="date of birth" onChange={(event) => { setForm({ ...form, dob: event.target.value }) }} />
        </div>
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
          </span>
          <input type="text" name="userName" id="userName" placeholder="address" onChange={(event) => { setForm({ ...form, address: event.target.value }) }} />
        </div>
        <input type="file" className="mb-3" placeholder="photo" onChange={(event) => { setForm({ ...form, photo: event.target.value }) }} />
        <div class="form-field d-flex align-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
          </span>
          <input type="email" name="userName" id="userName" placeholder="email" onChange={(event) => { setForm({ ...form, email: event.target.value }) }} />
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
        <Link to="/login">
          <button class="btn mt-3" onClick={(event => { register(event) })}>Register</button>
        </Link>
      </form>
      <div class="text-center fs-6">
        Do you have account ?
        <Link to="/login">
          <a href="#"> Sign in</a>
        </Link>
      </div>
    </div>
  )
}
