import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import Layout from "@/pages/layout/mainLayout";
export const openSans = Open_Sans({ subsets: ["latin"] });

import ThemeProvider from "@/theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "@/contexts/CartContext";
import UserContext from "@/contexts/UserContext";
// SITE SETTINGS PROVIDER
import SettingsProvider from "@/contexts/SettingContext";
import TokenContext from "@/contexts/TokenContext";
import ProductProvider from "@/contexts/ProductContext";
import Script from "next/script";

// IMPORT i18n SUPPORT FILE
// import "i18n";  // unknown issue???

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZHKYBMWHG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {` 
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JZHKYBMWHG');
          `}
        </Script>
      </head>
      <body className={openSans.className}>
        <UserContext>
          <CartProvider>
            <ProductProvider>
              <SettingsProvider>
                <TokenContext>
                  <ThemeProvider>
                    <Layout>{children}</Layout>
                  </ThemeProvider>
                </TokenContext>
              </SettingsProvider>
            </ProductProvider>
          </CartProvider>
        </UserContext>
      </body>
    </html>
  );
}
