import RootProvider from "@/Redux/Provider";
import "./globals.css";
import StickyNavBar from "@/components/StickyNavBar";

export const metadata = {
  title: "Mo niche Collections",
  description: "about mo niche",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-sans font-light ">
        <RootProvider>
          <StickyNavBar />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
