import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ハリーポッター図鑑",
    description: "ハリーポッターの図鑑です。"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
