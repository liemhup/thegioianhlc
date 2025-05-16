"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("Authenticated session:", session);
      router.push("/"); // Chuyển về trang chủ nếu đã đăng nhập
    }
  }, [status, router]);

  // Hiển thị loading state trong khi kiểm tra session
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Chỉ hiển thị form đăng nhập nếu chưa authenticated
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        {/* ...existing login form code... */}{" "}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-lg w-full space-y-6 p-10 bg-white rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 mb-4 relative">
                <Image
                  src="/logo.png" // Thay bằng logo của bạn
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="my-2 font-bold text-gray-500 text-3xl">
                Đăng nhập để kết nối
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {/* Google Button */}
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border bg-red-500 border-gray-200 rounded-xl hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Image
                  src="/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-8 h-8"
                />
                <span className="font-medium text-white">
                  Đăng nhập với Google
                </span>
              </button>

              {/* Facebook Button */}
              <button
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-200 rounded-xl bg-blue-500 hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Image
                  src="/fb.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-8 h-8"
                />
                <span className="font-medium  text-white">
                  Đăng nhập với Facebook
                </span>
              </button>

              {/* TikTok Button */}
              <button
                onClick={() => signIn("tiktok", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border bg-gray-50 rounded-xl border-gray-200 hover:bg-opacity-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="w-8 h-8 text-white"
                />
                <span className=" font-medium  text-gray-800">
                  Đăng nhập với TikTok
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LoginPage;
