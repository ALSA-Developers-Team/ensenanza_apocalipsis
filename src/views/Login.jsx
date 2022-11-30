import { useState } from "react";
import { supabase } from "../supabase/client";

function Login() {
  const [inputs, setInputs] = useState("");

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("inputs", inputs);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: inputs.email,
        password: inputs.password,
      });

      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h1 className="text-center">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
