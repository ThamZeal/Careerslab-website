import "./globals.css";


export const metadata = {
  title: "CareersLab | Thamzeal International",
  description: "CareersLab is a platform that helps students and professionals find the right career path.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
