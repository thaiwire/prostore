import { APP_NAME } from "@/lib/constants";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (<footer>
        <div className="border-t">
            <p className="p-5 flex-center">
                &copy; {currentYear} {APP_NAME}. All rights reserved.
            </p>
        </div>
    </footer>  );
}
 
export default Footer;