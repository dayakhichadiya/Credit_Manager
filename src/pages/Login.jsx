// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
// import { auth } from "../../Auth/firebaseConfig";

// const LoginPage = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
    

//     const navigate = useNavigate(); 

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email || !password) {
//             setError("All fields are required");
//             return;
//         } 
         
//         try {
//             await signInWithEmailAndPassword(auth,email,password)
//             alert("Login successful");
//             navigate("/addcard"); 
//         } catch(err){
//             setError("Invalid email or password. Try again")
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 shadow-lg rounded-lg w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer hover:bg-blue-600"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 <p className="text-center text-gray-600 mt-4">
//                     Don't have an account?{" "}
//                     <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth } from "../../Auth/firebaseConfig";
import { provider } from "../../Auth/firebaseConfig";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
   
    const [user, setUser] = useState(null); 
    const [isAuth, setIsAuth] = useState(null);
    const [curUser, setCurUser] = useState(null);
    
    
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Login Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful");
            navigate("/dashboard");
        } catch (err) {
            setError("Invalid email or password. Try again");
        }
    };

   const handleGoogle = async () => {

    try{

        const result = await signInWithPopup(auth, provider)
        const user = result.user;
        console.log("Sign in with Google Success", user);

        setIsAuth(true);
        setCurUser(user);
        navigate("/addcard")
    }

    catch(error){
        console.error("Google login error:", error.message);
        alert("Google login error")
    }
   }

    
    // Logout Function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                {user ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Welcome, {user.email}</h2>
                        <button 
                            onClick={handleLogout} 
                            className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer hover:bg-blue-600"
                            >
                                Login
                            </button>
                            <button
                                onClick={handleGoogle}
                                className="w-full bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer hover:bg-blue-600"
                            >
                                Continue with google
                            </button>
                        </form>
                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
