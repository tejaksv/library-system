import React,{useState} from "react";

const LogIn = ({user}) => {

    const [logInData,setSignInDta] = useState ({username: "", password: ""});
    const logInhandler = () => {
        const userExists = users.find(
            (user) => user.username === loginData.username && user.password === loginData.password
          );
      
          if (userExists) {
            alert("Login Successful!");
          } else {
            alert("Login Failed! Check your credentials.");
          }
        };
        return (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card p-4 mt-5">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={logInHandler}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                          type="text"
                          id="username"
                          className="form-control"
                          value={logInData.username}
                          onChange={(e) =>
                            setLogInData({ ...logInData, username: e.target.value })
                          }
                          placeholder="Enter your username"
                          required
                        />
                      </div>
        
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          value={logInData.password}
                          onChange={(e) =>
                            setLogInData({ ...logInData, password: e.target.value })
                          }
                          placeholder="Enter your password"
                          required
                        />
                      </div>
        
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        
        export default LogIn;