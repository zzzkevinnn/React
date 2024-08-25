
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <div className="container px-20 py-10 text-center">
            <p className="text-indigo-700">404</p>
            <h2 className="pb-2 font-semibold text-2xl"> Page Not Found </h2>
            
            <Link to={"/"}>
            <button className="mt-6 mx-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
             Kembali ke homepage </button>
            </Link>
        </div>
    )
}