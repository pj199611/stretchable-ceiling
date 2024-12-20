import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import Layout from "@/pages/layout/mainLayout";
export const openSans = Open_Sans({ subsets: ["latin"] });

import ThemeProvider from "@/theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "@/contexts/CartContext";
// SITE SETTINGS PROVIDER
import SettingsProvider from "@/contexts/SettingContext";
import TokenContext from "@/contexts/TokenContext";
import ProductProvider from "@/contexts/ProductContext";
import ProgressBar from "@/components/progress";

// IMPORT i18n SUPPORT FILE
// import "i18n";  // unknown issue???

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <ProductProvider>
            <SettingsProvider>
              <TokenContext>
                <ThemeProvider>
                  <ProgressBar />
                  <Layout>{children}</Layout>
                </ThemeProvider>
              </TokenContext>
            </SettingsProvider>
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
