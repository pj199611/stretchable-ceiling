import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
// import { GoogleAnalytics } from "@next/third-parties/google";
import ShopLayout1 from "@/components/layouts/shop-layout-1";

export const openSans = Open_Sans({ subsets: ["latin"] });

// THEME PROVIDER
import ThemeProvider from "@/theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "@/contexts/CartContext";
// SITE SETTINGS PROVIDER
import SettingsProvider from "@/contexts/SettingContext";
import TokenContext from "@/contexts/TokenContext";
// GLOBAL CUSTOM COMPONENTS
// import RTL from "@/components/rtl";
import ProgressBar from "@/components/progress";

// IMPORT i18n SUPPORT FILE
// import "i18n";  // unknown issue???

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <SettingsProvider>
            <TokenContext>
              <ThemeProvider>
                <ProgressBar />
                <ShopLayout1>{children}</ShopLayout1>
              </ThemeProvider>
            </TokenContext>
          </SettingsProvider>
        </CartProvider>
        {/* <GoogleAnalytics gaId="G-XKPD36JXY0" /> */}
      </body>
    </html>
  );
}
