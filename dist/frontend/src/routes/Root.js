"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const logo_svg_1 = require("/logo.svg");
const button_1 = require("@/components/ui/button");
const utils_1 = require("@/lib/utils");
function Root() {
    return (<>
      <div className="lg:max-w-[1400px] lg:mx-auto">
        
        <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6">
          <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
            <react_router_dom_1.NavLink to="/" className="flex gap-2 items-center">
              <img src={logo_svg_1.default}/>
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/" className={({ isActive }) => (0, utils_1.cn)('text-muted-foreground font-[600] transition-colors hover:text-foreground', {
            'text-foreground': isActive,
        })}>
              Home
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/about" className={({ isActive }) => (0, utils_1.cn)('text-muted-foreground font-[600] transition-colors hover:text-foreground', {
            'text-foreground': isActive,
        })}>
              About
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/contact" className={({ isActive }) => (0, utils_1.cn)('text-muted-foreground font-[600] transition-colors hover:text-foreground', {
            'text-foreground': isActive,
        })}>
              Contact
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to="/add-listing" className={({ isActive }) => (0, utils_1.cn)('text-muted-foreground font-[600] transition-colors hover:text-foreground', {
            'text-foreground': isActive,
        })}>
              Add Listing
            </react_router_dom_1.NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button_1.Button variant="ghost">Log In</button_1.Button>
            <button_1.Button>Sign Up</button_1.Button>
          </div>
        </header>
        <react_router_dom_1.Outlet />
      </div>
    </>);
}
exports.default = Root;
//# sourceMappingURL=Root.js.map