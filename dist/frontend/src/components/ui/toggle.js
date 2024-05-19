"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleVariants = exports.Toggle = void 0;
const React = require("react");
const TogglePrimitive = require("@radix-ui/react-toggle");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: "h-9 px-3",
            sm: "h-8 px-2",
            lg: "h-10 px-3",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.toggleVariants = toggleVariants;
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (<TogglePrimitive.Root ref={ref} className={(0, utils_1.cn)(toggleVariants({ variant, size, className }))} {...props}/>));
exports.Toggle = Toggle;
Toggle.displayName = TogglePrimitive.Root.displayName;
//# sourceMappingURL=toggle.js.map