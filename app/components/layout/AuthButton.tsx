// components/AuthButton.tsx
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      {session ? (
        <button className="bg-red-500" onClick={() => signOut()}>
          Đăng xuất
        </button>
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
