import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    return redirect("/api/auth/login");
  }

  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-bold text-center">
            Hi, {user?.given_name}
          </span>
          <p className="">Welcome to your profile!</p>
          <p className="">This is your Gmail: {user?.email}</p>
        </div>
      </div>
    </main>
  );
}
