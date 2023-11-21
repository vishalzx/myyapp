// import Footer from '../../Components/Footer';
// import Navbar from "../../Components/Navbar";
import Forms from "../../Components/Forms";

import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        <Forms/>
      </body>
    </html>
  )
}
