import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (<footer className="w-full border-t">
        <div className="p-5 flex-center">
            {APP_NAME} &copy; {currentYear} All rights reserved.
        </div>
        </footer>);
};
export default Footer;