import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('authUser')) || null,
    authErrors: [],
    authStatus: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
    isAuthenticated: (state) => !!state.authUser,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const { data } = await axios.get("/api/user");
      this.authUser = data;
      localStorage.setItem('authUser', JSON.stringify(data));
    },
    async handleLogin(data) {
      this.authErrors = [];
            // Manually check the email and password
      if (data.email === "admin@gmail.com" && data.password === "12345678") {
        const adminUser = { email: "admin@gmail.com", name: "Admin" };
        this.authUser = adminUser;
        localStorage.setItem('authUser', JSON.stringify(adminUser));
        this.router.push("/");
        return;
      }else{
        this.authErrors = "not registered";
        alert("error in login");
      }
      await this.getToken();

      //try {
      //  await axios.post("/login", {
      //    email: data.email,
      //    password: data.password,
      //  });
      //  await this.getUser();
      //  this.router.push("/crm-dashboard");
      //} catch (error) {
      //  if (error.response.status === 422) {
      //    this.authErrors = error.response.data.errors;
      //  }
      //}
    },
    async handleRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        await this.getUser();  // Fetch the user and update state
        this.router.push("/login"); // Redirect to home after registration
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleLogout() {
      alert('logout')
      //await axios.post("/logout");
      this.authUser = null;
      localStorage.removeItem('authUser');
      this.router.push("/login");
    },
    async handleForgotPassword(email) {
      this.authErrors = [];
      this.getToken();
      try {
        const response = await axios.post("/forgot-password", {
          email: email,
        });
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        const response = await axios.post("/reset-password", resetData);
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});

//import axios from "axios";

//export const useAuthStore = defineStore("auth", {
//  state: () => ({
//    authUser: JSON.parse(localStorage.getItem('authUser')) || null,
//    authErrors: [],
//    authStatus: null,
//  }),
//  getters: {
//    user: (state) => state.authUser,
//    errors: (state) => state.authErrors,
//    status: (state) => state.authStatus,
//    isAuthenticated: (state) => !!state.authUser, // Add a getter to check if the user is authenticated
//  },
//  actions: {
//    async getToken() {
//      await axios.get("/sanctum/csrf-cookie");
//    },
//    async getUser() {
//      await this.getToken();
//      const { data } = await axios.get("/api/user");
//      this.authUser = data;
//      localStorage.setItem('authUser', JSON.stringify(data));
//    },
//    async handleLogin(data) {
//      this.authErrors = [];
//      await this.getToken();

//      try {
//        await axios.post("/login", {
//          email: data.email,
//          password: data.password,
//        });
//        await this.getUser();  // Fetch the user and update state
//        this.router.push("/crm-dashboard"); // Redirect to home after login
//      } catch (error) {
//        if (error.response.status === 422) {
//          alert("err")
//          this.authErrors = error.response.data.errors;
//        }
//      }
//    },
//    async handleRegister(data) {
//      this.authErrors = [];
//      await this.getToken();
//      try {
//        await axios.post("/register", {
//          name: data.name,
//          email: data.email,
//          password: data.password,
//          password_confirmation: data.password_confirmation,
//        });
//        await this.getUser();  // Fetch the user and update state
//        this.router.push("/"); // Redirect to home after registration
//      } catch (error) {
//        if (error.response.status === 422) {
//          this.authErrors = error.response.data.errors;
//        }
//      }
//    },
//    async handleLogout() {
//      await axios.post("/logout");
//      this.authUser = null;
//      localStorage.removeItem('authUser');
//      this.router.push("/login");
//    },
//    async handleForgotPassword(email) {
//      this.authErrors = [];
//      this.getToken();
//      try {
//        const response = await axios.post("/forgot-password", {
//          email: email,
//        });
//        this.authStatus = response.data.status;
//      } catch (error) {
//        if (error.response.status === 422) {
//          this.authErrors = error.response.data.errors;
//        }
//      }
//    },
//    async handleResetPassword(resetData) {
//      this.authErrors = [];
//      try {
//        const response = await axios.post("/reset-password", resetData);
//        this.authStatus = response.data.status;
//      } catch (error) {
//        if (error.response.status === 422) {
//          this.authErrors = error.response.data.errors;
//        }
//      }
//    },
//  },
//});