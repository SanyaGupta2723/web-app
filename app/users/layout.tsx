import UserNavbar from "../users/UserNavbar";
export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#040B1F] text-white">
      <UserNavbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}