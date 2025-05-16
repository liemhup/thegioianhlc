// components/AuthButton.tsx
"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", session);
  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          <img src={session.user!.image} alt="" className="w-8 rounded-2xl" />
          <button className="bg-red-500 w-24" onClick={() => signOut()}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 p-2 rounded-xl"
          onClick={() => router.push("/login")}
        >
          Đăng nhập
        </button>
      )}
    </div>
  );
}
