import { cookies } from "next/headers";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import ZitadelProvider from "next-auth/providers/zitadel";

const authOptions: NextAuthOptions = {
  providers: [
    ZitadelProvider({
      clientId: process.env.ZITADEL_CLIENT_ID!,
      issuer: process.env.ZITADEL_ISSUER,
      clientSecret: "",
    }),
  ],

  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },

  callbacks: {
    async signIn(dto) {
      cookies().set("authId", dto?.user?.id);
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
