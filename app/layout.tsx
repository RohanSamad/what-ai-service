import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyDemo from "@/components/shared/StickyDemo";

export const metadata: Metadata = {
    title: "What AI Services - AI Executive Assistants",
    description: "Modern, cost-effective AI Executive Assistants for busy professionals. Upgrade your productivity with 24/7 AI support.",
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  var storage = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storage === 'dark' || (!storage && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
                    }}
                />
            </head>
            <body className="font-orbitron antialiased min-h-screen flex flex-col transition-colors duration-300">
                <div className="fixed-bg" />
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <StickyDemo />
            </body>
        </html>
    );
}
