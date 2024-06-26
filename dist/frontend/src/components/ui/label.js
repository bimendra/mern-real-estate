"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const React = require("react");
const LabelPrimitive = require("@radix-ui/react-label");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const labelVariants = (0, class_variance_authority_1.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => (<LabelPrimitive.Root ref={ref} className={(0, utils_1.cn)(labelVariants(), className)} {...props}/>));
exports.Label = Label;
Label.displayName = LabelPrimitive.Root.displayName;
//# sourceMappingURL=label.js.map