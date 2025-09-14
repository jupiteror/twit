import Header from "../../widgets/header/header.tsx";
import Footer from "../../widgets/footer/footer.tsx";
import type {IWrapperProps} from "../../shared/types/wrapper.interface.ts";

const Layout = ({children}:IWrapperProps) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;