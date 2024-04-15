import LoginForm from "@/components/LoginForm";
import { BsShieldLock } from "react-icons/bs";

const Login = () => {
    return (
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg shadow border pt-10">
    <BsShieldLock size={100} className="mx-auto mb-3 text-indigo-600"/>
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Unlock access to exclusive course and resources by logging is now!
    </p>

        <LoginForm />

  </div>
</div>
    );
}

export default Login;