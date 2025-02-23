import  { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthPage = ({ isSignUp }) => {
    const [userDetails, setUserDetails] = useState({ username: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const validateUsername = (username) => /^[A-Za-z][A-Za-z0-9_]*$/.test(username);
    const validatePassword = (password) => password.length >= 8;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = userDetails;

        if (!validateUsername(username)) {
            alert("Username ต้องขึ้นต้นด้วยตัวอักษรและไม่มีอักขระพิเศษ");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password ต้องมีอย่างน้อย 8 ตัวอักษร");
            return;
        }

        if (isSignUp && password !== confirmPassword) {
            alert("Password และ Confirm Password ต้องตรงกัน");
            return;
        }

        localStorage.setItem("user", JSON.stringify({ username }));
        alert(isSignUp ? "สมัครสมาชิกสำเร็จ!" : "เข้าสู่ระบบสำเร็จ!");
        navigate("/");
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white flex items-center justify-center font-[Kanit]">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-center mb-6">{isSignUp ? "🔐 สมัครสมาชิก" : "🔑 เข้าสู่ระบบ"}</h1>
                <form onSubmit={handleSubmit}>
                    <label className="block text-lg font-semibold">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={userDetails.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <label className="block text-lg font-semibold mt-4">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {isSignUp && (
                        <>
                            <label className="block text-lg font-semibold mt-4">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={userDetails.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-2 border rounded mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </>
                    )}

                    <button type="submit" className="mt-6 px-6 py-2 bg-green-600 text-white rounded text-xl w-full hover:bg-green-700 transition">
                        {isSignUp ? "✅ สมัครสมาชิก" : "➡️ เข้าสู่ระบบ"}
                        <link to="../../App.jsx" />
                    </button>
                </form>
                <p className="text-center mt-4">
                    {isSignUp ? "มีบัญชีอยู่แล้ว? " : "ยังไม่มีบัญชี? "}
                    <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate(isSignUp ? "/signin" : "/signup")}>
                        {isSignUp ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
