import connectToDB from "@/libs/connectToDB";
import User from "@/models/userSchema";
import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers : [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials){
                const {email, password} = credentials;
                await connectToDB();
                const user = await User.findOne({email});
                if(!user){
                    return null;
                }
                const matchedPassword = await bcrypt.compare(password, user.password);
                if(!matchedPassword){
                    return null;
                }
                return {
                    email: user.email,
                    name: user.fullname
                }
            }
        })
    ],
sessions: {
    strategy: 'jwt',
},
secret: process.env.NEXTAUTH_SECRET,
pages: {
    signIn: '/',
},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};
