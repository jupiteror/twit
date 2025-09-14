import type {IWrapperProps} from "@/shared/types/wrapper.interface.ts";


const UnregistredLayout = ({children}:IWrapperProps) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default UnregistredLayout;