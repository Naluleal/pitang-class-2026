import { createFileRoute, Outlet, useLocation, redirect } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Fragment } from "react/jsx-runtime";
import { getAccessToken } from "@/lib/utils"; 

export const Route = createFileRoute("/dashboard")({
  beforeLoad: () => {
    const token = getAccessToken();

    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {paths.map((path, index) => {
                  const lastPath = index + 1 === paths.length;

                  return (
                    <Fragment key={path}>
                      <BreadcrumbItem>
                        <BreadcrumbPage
                          className={`capitalize ${lastPath ? "font-bold text-foreground" : "text-muted-foreground"}`}
                        >
                          {path.replace(/-/g, " ")}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                      {!lastPath && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}