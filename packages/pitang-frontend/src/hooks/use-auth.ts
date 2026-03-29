import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { SignInForm } from "@/components/login-form";
import { useEffect, useState } from "react";
import type { LoggedUser } from "@/types";

const baseURL = "https://dummyjson.com";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export function useAuth() {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthenticatedUser() {
      const token = getCookie("@pitang/accessToken");
      if (!token) return;

      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedUser(data);
      } else {
        document.cookie = "@pitang/accessToken=; path=/; Max-Age=0";
      }
    }
    getAuthenticatedUser();
  }, []);

  async function handleLogout() {
    document.cookie = "@pitang/accessToken=; path=/; Max-Age=0";
    navigate({ to: "/login" });
  }

  async function handleLogin(data: SignInForm) {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      document.cookie = `@pitang/accessToken=${json.accessToken}; path=/; Max-Age=86400`;
      toast.success("Welcome!");
      navigate({ to: "/dashboard" });
    } else {
      toast.error(json.message);
    }
  }

  return {
    loggedUser,
    handleLogin,
    handleLogout,
  };
}