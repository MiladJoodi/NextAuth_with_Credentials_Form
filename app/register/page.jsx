import RegisterForm from "@/components/Register";
import { BsShieldLock } from "react-icons/bs";

const Register = () => {
    return (
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg shadow border pt-10">
    <BsShieldLock size={100} className="mx-auto mb-3 text-indigo-600"/>
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Registration</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Create a new account to access to the best learning platform in the market.
    </p>

        <RegisterForm />

  </div>
</div>
    );
}

export default Register;