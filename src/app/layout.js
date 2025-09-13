import "./globals.css";


export const metadata = {
  title: "CareersLab | Thamzeal International",
  description: "CareersLab is a platform that helps students and professionals find the right career path.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
