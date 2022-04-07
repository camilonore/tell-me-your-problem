import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDatabase } from '../../../Utils/connectDb'
import { UserModel } from '../../../models/user/user'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  theme: {
    colorScheme: 'light'
  },
  events: {
    signIn ({ user }) {
      const normalizedUser = {
        userId: user.id,
        username: user.name,
        img: user.image
      };
      (async () => {
        await connectToDatabase()
        const existUser = await UserModel.findOne({
          userId: user.id
        })
        if (!existUser) {
          const newUser = new UserModel(normalizedUser)
          newUser.save()
        }
      })()
    }
  },
  callbacks: {
    async session ({ session, user, token }) {
      session.user.userId = token.sub
      return session
    }
  }
})
