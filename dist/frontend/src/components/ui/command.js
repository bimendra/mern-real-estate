"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSeparator = exports.CommandShortcut = exports.CommandItem = exports.CommandGroup = exports.CommandEmpty = exports.CommandList = exports.CommandInput = exports.CommandDialog = exports.Command = void 0;
const React = require("react");
const react_icons_1 = require("@radix-ui/react-icons");
const cmdk_1 = require("cmdk");
const utils_1 = require("@/lib/utils");
const dialog_1 = require("@/components/ui/dialog");
const Command = React.forwardRef(({ className, ...props }, ref) => (<cmdk_1.Command ref={ref} className={(0, utils_1.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)} {...props}/>));
exports.Command = Command;
Command.displayName = cmdk_1.Command.displayName;
const CommandDialog = ({ children, ...props }) => {
    return (<dialog_1.Dialog {...props}>
      <dialog_1.DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.CommandDialog = CommandDialog;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <react_icons_1.MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50"/>
    <cmdk_1.Command.Input ref={ref} className={(0, utils_1.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}/>
  </div>));
exports.CommandInput = CommandInput;
CommandInput.displayName = cmdk_1.Command.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => (<cmdk_1.Command.List ref={ref} className={(0, utils_1.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props}/>));
exports.CommandList = CommandList;
CommandList.displayName = cmdk_1.Command.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => (<cmdk_1.Command.Empty ref={ref} className="py-6 text-center text-sm" {...props}/>));
exports.CommandEmpty = CommandEmpty;
CommandEmpty.displayName = cmdk_1.Command.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (<cmdk_1.Command.Group ref={ref} className={(0, utils_1.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)} {...props}/>));
exports.CommandGroup = CommandGroup;
CommandGroup.displayName = cmdk_1.Command.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (<cmdk_1.Command.Separator ref={ref} className={(0, utils_1.cn)("-mx-1 h-px bg-border", className)} {...props}/>));
exports.CommandSeparator = CommandSeparator;
CommandSeparator.displayName = cmdk_1.Command.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => (<cmdk_1.Command.Item ref={ref} className={(0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)} {...props}/>));
exports.CommandItem = CommandItem;
CommandItem.displayName = cmdk_1.Command.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
    return (<span className={(0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props}/>);
};
exports.CommandShortcut = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
//# sourceMappingURL=command.js.map