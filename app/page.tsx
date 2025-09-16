import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Febby</h1>
      <p className="text-lg text-gray-600 mb-6">
        A passionate Fullstack Developer building web apps with Next.js & React.
      </p>
      <div className="flex gap-4">
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </div>
    </main>
  )
}
