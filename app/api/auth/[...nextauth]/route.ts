import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import TikTokProvider from "next-auth/providers/tiktok";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // TikTokProvider({
    //   clientId: process.env.TIKTOK_CLIENT_ID!,
    //   clientSecret: process.env.TIKTOK_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
