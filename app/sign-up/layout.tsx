import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "ConnectLy | Sign up",
  description: "Centralized Hub to manage your profile links.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <>
        {children}
      </>
    
  );
}
