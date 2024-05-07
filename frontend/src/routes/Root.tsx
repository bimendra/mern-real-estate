import { NavLink as Link, Outlet } from 'react-router-dom';
import logo from '/logo.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Root() {
  return (
    <>
      <div className="lg:max-w-[1400px] lg:mx-auto">
        {/* Header */}
        <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6">
          <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
            <Link to="/" className="flex gap-2 items-center">
              <img src={logo} />
            </Link>
            <Link
              to="/"
              className={({ isActive }) =>
                cn(
                  'text-muted-foreground font-[600] transition-colors hover:text-foreground',
                  {
                    'text-foreground': isActive,
                  }
                )
              }
            >
              Home
            </Link>
            <Link
              to="/about"
              className={({ isActive }) =>
                cn(
                  'text-muted-foreground font-[600] transition-colors hover:text-foreground',
                  {
                    'text-foreground': isActive,
                  }
                )
              }
            >
              About
            </Link>
            <Link
              to="/contact"
              className={({ isActive }) =>
                cn(
                  'text-muted-foreground font-[600] transition-colors hover:text-foreground',
                  {
                    'text-foreground': isActive,
                  }
                )
              }
            >
              Contact
            </Link>
            <Link
              to="/add-listing"
              className={({ isActive }) =>
                cn(
                  'text-muted-foreground font-[600] transition-colors hover:text-foreground',
                  {
                    'text-foreground': isActive,
                  }
                )
              }
            >
              Add Listing
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
