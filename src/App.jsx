import {MantineProvider} from "@mantine/core";
import {createMemoryRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {AppLayout} from "./AppLayout.jsx";
import {RepairStatus} from "./repair/RepairStatus.jsx";
import {Computers} from "./computers/Computers.jsx";
import {Customers} from "./customer/Customers.jsx";
import {Gifts} from "./gift/Gifts.jsx";

export default function App() {
    return <MantineProvider>
        <RouterProvider router={router}/>
    </MantineProvider>;
}

const router = createMemoryRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<RepairStatus/>}/>
            <Route path="computers" element={<Computers/>}/>
            <Route path="customers" element={<Customers/>}/>
            <Route path="gifts" element={<Gifts/>}/>
        </Route>
    )
)
