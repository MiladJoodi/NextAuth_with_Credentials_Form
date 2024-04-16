"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const dashboard = (props) => {
    const {data: session} = useSession();
    console.log(session)
    return (
        <div className="flex text-xl mx-auto mt-48 rounded-md justify-center items-center flex-col">
            <span>Name: {session?.user?.name}</span>
            <span>Email: {session?.user?.email}</span>
            <button 
            onClick={()=> signOut()}
            className="inline-block rounded border border-blue-600 px-12 py-3 text-sm shadow mt-8"
            >
                Logout
            </button>
        </div>
    );
}

export default dashboard;