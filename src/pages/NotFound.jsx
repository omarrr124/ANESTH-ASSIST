// src/pages/NotFound.jsx
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center py-20">
      <h1 className="font-serif text-8xl text-[#3e546d]">404</h1>
      <h2 className="font-serif text-3xl text-[#1f1f1f]">Page Not Found</h2>
      <p className="text-[#555] text-base max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button href="/">Return Home</Button>
    </section>
  )
}
