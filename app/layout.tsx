import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Career OS",
  description: "AI Career Navigation System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* GLOBAL BACKGROUND (premium feel) */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 -z-10" />

        {/* NAVBAR (IMPORTANT - THIS CONTROLS VISIBILITY) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>

      </body>
    </html>
  );
}