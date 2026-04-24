import localFont from "next/font/local";

export const gibson = localFont({
  src: [
    {
      path: './gibson/Gibson-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './gibson/Gibson-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gibson',
  display: 'swap',
});