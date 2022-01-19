import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '1038682453619-1qi64v3ch08l8o3fi65an7sgl7tkaoe1.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  // ...add more providers here
  jwt : {
    encryption: true,
  },
  secret: process.env.secret,
  callbacks: {
       async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        //gets us the details of the sign in user
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      },
      redirect: async (url, _baseUrl) => {
          if(url === '/profile'){
              return Promise.resolve('/');
          }
          //use this space to redirect after google authentication
          return Promise.resolve('/')
      }
  }
})