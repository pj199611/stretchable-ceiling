import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const SignOut = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/login">Login</Link>
          <Link href="/signup">SignUp</Link>
          <Link href="/">SignOut</Link>
        </div>
      </main>
    </div>
  );
}
