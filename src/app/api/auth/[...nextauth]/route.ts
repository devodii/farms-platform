import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const api = process.env.API_URL;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "auth",
      async authorize(credentials, req): any {
        const email = req.body?.email;
        const password = req.body?.password;

        // const res = await fetch(api + "/users", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });

        // const user = await res.json();
        const authed = true;

        if (authed) {
          return { name: "Emmanuel", email };
        }
        // Return null if user data could not be retrieved
        return null;
      },
      credentials: {},
    }),
  ],

  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
