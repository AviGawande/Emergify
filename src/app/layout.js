'use client';

import { SessionProvider } from "next-auth/react";
import AppWalletProvider from '../app/components/AppWalletProvider';
import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {/* Wrap the app with AppWalletProvider */}
          <AppWalletProvider>
            {children}
          </AppWalletProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
