import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(res => {
            console.log(res.user);
            const createdAt = res?.user?.metadata?.creationTime;
            const newUser = {name,email,createdAt}
            // save new user info to the db
            fetch('http://localhost:5000/users',{
                method: "POST",
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)

            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    console.log('user created in db');
                }
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
            <h1 className="text-3xl font-bold">Create an account!</h1>
            
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;