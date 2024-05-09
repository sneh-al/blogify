import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css";
import { Metadata } from "next";
import Navbar from "@/components/about/Navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: {
    template: "%s | Blogify",
    default: "Blogify",
  },
  description: "Platform for Crafting and Sharing Your Ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="">
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
