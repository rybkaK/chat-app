import React, {useState} from 'react';
import GenderCheckbox from "./GenderCheckbox.jsx";
import {Link} from "react-router-dom";
import useSignup from "../../hooks/useSignup.jsx";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    console.log('inputs ', inputs)

    const handleInputChange = (event) => setInputs(prev => ({...prev, [event.target.name]: event.target.value}));

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered h-10"
                            name="fullName"
                            value={inputs.fullName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                            name="username"
                            value={inputs.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            name="password"
                            value={inputs.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">
                                Confirm password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                            name="confirmPassword"
                            value={inputs.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-sm mt-2"
                            disabled={loading}
                        >
                            { loading ? <span className="loading loading-spinner"></span> : "Sign Up" }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;