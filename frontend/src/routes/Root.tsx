import { Link, Outlet } from 'react-router-dom';
import logo from '/logo.svg';
import { Button } from '@/components/ui/button';

function Root() {
  return (
    <>
      <div className="lg:max-w-[1400px] lg:mx-auto">
        {/* Header */}
        <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6">
          <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
            <Link to="/" target="_blank" className="flex gap-2 items-center">
              <img src={logo} className="logo h-[14px] md:mr-16" alt="Logo" />
            </Link>
            <Link
              to="#"
              className="text-muted-foreground font-[600] transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-muted-foreground font-[600] transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-muted-foreground font-[600] transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="text-muted-foreground font-[600] transition-colors hover:text-foreground"
            >
              Agents
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
