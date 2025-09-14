import {BrowserRouter} from "react-router";
import type {IWrapperProps} from "../shared/types/wrapper.interface.ts";

const AppProvider = ({children}:IWrapperProps) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default AppProvider;