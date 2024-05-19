"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroupItem = exports.RadioGroup = void 0;
const React = require("react");
const react_icons_1 = require("@radix-ui/react-icons");
const RadioGroupPrimitive = require("@radix-ui/react-radio-group");
const utils_1 = require("@/lib/utils");
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (<RadioGroupPrimitive.Root className={(0, utils_1.cn)("grid gap-2", className)} {...props} ref={ref}/>);
});
exports.RadioGroup = RadioGroup;
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return (<RadioGroupPrimitive.Item ref={ref} className={(0, utils_1.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <react_icons_1.CheckIcon className="h-3.5 w-3.5 fill-primary"/>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>);
});
exports.RadioGroupItem = RadioGroupItem;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//# sourceMappingURL=radio-group.js.map