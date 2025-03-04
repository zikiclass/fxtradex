import NextAuth from "next-auth";
import { authOptions } from "../../auth/authOptions";

// Directly using NextAuth for handler
const handler = NextAuth(authOptions);

// Export GET and POST for Next.js routing
export { handler as GET, handler as POST };
