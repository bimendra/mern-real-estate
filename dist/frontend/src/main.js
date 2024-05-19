"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const Root_tsx_1 = require("./routes/Root.tsx");
const Home_tsx_1 = require("./routes/Home.tsx");
const SearchResults_tsx_1 = require("./routes/SearchResults.tsx");
const AddListing_tsx_1 = require("./routes/AddListing.tsx");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.RouterProvider router={(0, react_router_dom_1.createBrowserRouter)([
        {
            path: '/',
            element: <Root_tsx_1.default />,
            children: [
                {
                    index: true,
                    element: <Home_tsx_1.default />,
                },
                {
                    path: 'add-listing',
                    element: <AddListing_tsx_1.default />,
                },
                {
                    path: 'search-results',
                    element: <SearchResults_tsx_1.default />,
                },
            ],
        },
    ])}/>
  </react_1.default.StrictMode>);
//# sourceMappingURL=main.js.map