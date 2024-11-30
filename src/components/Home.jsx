import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees,setCoffees] = useState(loadedCoffees)
    
    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-center text-3xl font-bold">total coffees : {coffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    coffees.map(coffee => <Coffee
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        key={coffee._id}
                    ></Coffee>)
                }
            </div>
            
        </div>
    );
};

export default Home;