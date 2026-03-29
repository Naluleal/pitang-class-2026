import { createFileRoute, redirect } from "@tanstack/react-router";
import { getAccessToken } from "@/lib/utils";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_auth/login")({
  beforeLoad: () => {
    const token = getAccessToken();

    if (token) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: LoginComponent, 
});

function LoginComponent() {
  const { handleLogin } = useAuth();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}