import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
import axios from "axios";
class UserService extends GenericService {
  constructor() {
    super();
  }

  signup = ({ name, email, password, role }) =>
    new Promise((resolve, reject) => {
      this.post("users/register", { name, email, password })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  login = ({ email, password }) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((data) => {
          localStorage.setItem("digicorntoken", data.token);
          resolve(data.token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  logout = () => {
    localStorage.removeItem("digicorntoken");
    axios.defaults.headers.common["x-auth-token"] = null;
  };

  forgetPassword = ({ email }) =>
    new Promise((resolve, reject) => {
      this.post("/users/forget", { email })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  resetPassword = ({ newPassword, resetPasswordLink }) =>
    new Promise((resolve, reject) => {
      this.put("/users/reset", { newPassword, resetPasswordLink })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getProfile = () =>
    new Promise((resolve, reject) => {
      this.get("users/profile")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  updateProfile = (id, { name, email, pic, banner, bio }) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("pic", pic);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("banner", banner);
      formData.append("bio", bio);
      this.put("users/profile/update/" + id, formData)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("digicorntoken");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };

  isLoggedIn = () => {
    return localStorage.getItem("digicorntoken") ? true : false;
  };
}

let userService = new UserService();
export default userService;
