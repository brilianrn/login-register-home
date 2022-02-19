import { reducerTypeUser } from "../../commons/constantas";
import axios from "../../api";
import swal from "sweetalert";

export function setUserLogin(payload) {
  return { type: reducerTypeUser.userLogin, payload };
}

export function setCustomers(payload) {
  return { type: reducerTypeUser.customers, payload };
}

export function setUserLoginAsync({ email, password, navigate }) {
  return ((dispatch) => {
    axios({
      url: "/user/customer/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { email, password }
    })
      .then(({ data }) => {
        dispatch(setUserLogin(data));
        localStorage.setItem("access_token", data.access_token);

        navigate("/");
      })
      .catch(_ => {
        swal({
          title: "Peringatan!",
          text: "Email atau password salah",
          icon: "error",
          button: "Oke"
        });
      })
  })
}

export function setUserLoginAdminAsync({ email, password, navigate }) {
  return ((dispatch) => {
    axios({
      url: "/user/admin/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { email, password }
    })
      .then(({ data }) => {
        dispatch(setUserLogin(data));
        localStorage.setItem("access_token", data.access_token);

        navigate("/");
      })
      .catch(_ => {
        swal({
          title: "Peringatan!",
          text: "Email atau password salah",
          icon: "error",
          button: "Oke"
        });
      })
  })
}

export function customerRegister({ full_name, nick_name, dob, address, photo, email, password, navigate }) {
  axios({
    url: "/user/customer/register",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      full_name,
      nick_name,
      dob,
      address,
      photo,
      email,
      password
    }
  })
    .then(({ data }) => {
      console.log(data)
      navigate("/login");
    })
    .catch(_ => {
      swal({
        title: "Peringatan!",
        text: "Email atau password salah",
        icon: "error",
        button: "Oke"
      });
    })
}

export function customerList() {
  return ((dispatch) => {
    axios({
      url: "/user/admin/list-customers",
      method: "GET"
    })
      .then(({ data }) => {
        dispatch(setCustomers(data));
        console.log(data)
      })
      .catch(_ => {
        swal({
          title: "Peringatan!",
          text: "Internal server error",
          icon: "error",
          button: "Oke"
        });
      })
  })
}