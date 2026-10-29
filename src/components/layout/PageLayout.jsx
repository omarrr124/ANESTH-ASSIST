// src/components/layout/PageLayout.jsx
// Wraps every page with Navbar + Footer
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, currentPath }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f0]">
      <Navbar currentPath={currentPath} />
      <main className="flex-1 pt-[76px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
