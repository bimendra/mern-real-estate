"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsContent = exports.TabsTrigger = exports.TabsList = exports.Tabs = void 0;
const React = require("react");
const TabsPrimitive = require("@radix-ui/react-tabs");
const utils_1 = require("@/lib/utils");
const Tabs = TabsPrimitive.Root;
exports.Tabs = Tabs;
const TabsList = React.forwardRef(({ className, ...props }, ref) => (<TabsPrimitive.List ref={ref} className={(0, utils_1.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className)} {...props}/>));
exports.TabsList = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (<TabsPrimitive.Trigger ref={ref} className={(0, utils_1.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className)} {...props}/>));
exports.TabsTrigger = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (<TabsPrimitive.Content ref={ref} className={(0, utils_1.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props}/>));
exports.TabsContent = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
//# sourceMappingURL=tabs.js.map