import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

import Header from "./components/Header";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/M-logo.png" sizes="any" />;
            </head>
            <body className={montserrat.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
