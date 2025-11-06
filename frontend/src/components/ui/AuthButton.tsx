"use client";

import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = () => {
    const hasToken = document.cookie
      .split("; ")
      .some((c) => c.startsWith("token="));
    setIsLoggedIn(hasToken);
  };

  // Atualiza o estado de login e redireciona se necessário
  useEffect(() => {
    checkAuth();

    if (window.location.pathname === "/login") {
      const hasToken = document.cookie
        .split("; ")
        .some((c) => c.startsWith("token="));
      if (hasToken) {
        window.location.href = "/";
      }
    }
  }, []);

  const handleLogout = () => {
    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center gap-2">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          title="Sair"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-700 hover:text-red-500 transition font-medium hover:bg-gray-100"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden sm:inline">Sair</span>
        </button>
      ) : (
        <Link
          href="/login"
          title="Entrar"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-700 hover:text-amber-500 transition font-medium hover:bg-gray-100"
        >
          <LogIn className="w-5 h-5" />
          <span className="hidden sm:inline">Entrar</span>
        </Link>
      )}
    </div>
  );
}
