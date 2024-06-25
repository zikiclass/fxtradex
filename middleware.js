export { default } from "next-auth/middelware";

export const config = {
  matcher: ["users/", "admin/"],
};
