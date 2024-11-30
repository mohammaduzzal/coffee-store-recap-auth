import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {
    const {logInUser} = useContext(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then(res =>{
            console.log(res.user);
            // update last login time
            const lastSignInTime = res?.user?.metadata?.lastSignInTime;
            const loginInfo = {email,lastSignInTime};

            fetch('http://localhost:5000/users',{
              method: "PATCH",
              headers:{
                "content-type" : "application/json"
              },
              body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data =>{
              console.log('sign in info updated in db', data);
            })
        })
        .catch(err =>{
            console.log('error', err);
        })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
            
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>New to coffee store ? <Link className="text-red-600 underline" to='/signUp'>Signup</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;