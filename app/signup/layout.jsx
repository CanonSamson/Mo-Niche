import Navbar from "@/components/Navbar"

export const metadata = {
    title: 'Create an Account - Mo niche Collections',
  }
  
  export default function RootLayout({ children }) {
    return (
      <>
        <Navbar />
        {children}
      </>
    )
  }
  