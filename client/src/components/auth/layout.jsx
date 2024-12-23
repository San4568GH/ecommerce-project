import { Outlet } from "react-router-dom";
import logo from "../../assets/logo-2.png"

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-blue-950 w-1/2 px-12">
      <img src={logo}></img>
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Welcome!!
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
