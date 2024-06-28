import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actionCreators';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';



export const Login = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();

        const DB_SERVER = event.target.DB_SERVER.value;
        const DB_NAME = event.target.DB_NAME.value;
        const DB_USER = event.target.DB_USER.value;
        const DB_PASS = event.target.DB_PASS.value;

        try {
            await dispatch(loginUser(DB_SERVER, DB_USER, DB_PASS, DB_NAME));

            Swal.fire({
                icon: 'success',
                title: 'Logged in successfully!',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    navigate('/');
                }, 200);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Server pulsa yang selalu berusaha memperbesar  <br className="hidden md:block" />
                                layanan yang berkualitas
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Dari pulsa elektrik hingga pembayaran tagihan, hadir dengan solusi yang mengutamakan kualitas, kemudahan, dan keamanan
                            </p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <img src='/images/logoWebMarkaz.png' alt="Your Image"
                                    style={{ width: '100px', maxWidth: '70%', display: 'block', margin: 'auto' }}
                                />
                                <form className="text-left" onSubmit={handleLogin}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="DB_SERVER"
                                            className="inline-block mb-1 font-medium sm:text-left"
                                        >
                                            Server Name
                                        </label>
                                        <input
                                            placeholder="xxx.xxx.xx7.94"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="DB_SERVER"
                                            name="DB_SERVER"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="DB_NAME"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Database Name
                                        </label>
                                        <input
                                            placeholder="Otomax"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="DB_NAME"
                                            name="DB_NAME"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="DB_USER"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            username
                                        </label>
                                        <input
                                            placeholder="userMarkaz"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="DB_USER"
                                            name="DB_USER"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="DB_PASS"
                                            className="inline-block mb-1 font-medium text-left"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="********"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-left"
                                            id="DB_PASS"
                                            name="DB_PASS"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full shadow-lg shadow-brown-800/80 rounded-lg gradient text-white px-4 py-2 text-sm rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                                            style={{ backgroundColor: '#594545' }}
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-center">
                                        We respect your privacy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
