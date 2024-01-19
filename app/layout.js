import "./globals.css";
import Footer from "@/components/Footer";
import { AppProvider } from "@/Context";

// const roboto = Roboto({ subsets: ["latin"] });
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </head>
      <body>
        <AppProvider>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
