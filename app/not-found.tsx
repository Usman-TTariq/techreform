"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname?.startsWith("/blog/")) {
      router.replace("/");
    }
  }, [pathname, router]);

  if (pathname?.startsWith("/blog/")) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 text-lg mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <a href="/blog" className="text-[#F74B1C] hover:underline text-lg font-semibold">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return null;
}
