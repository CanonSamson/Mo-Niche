import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Cart - Mo niche Collections',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}