import '@/styles/globals.css'

import GlassPane from "../../components/GlassPane";
import { Sidebar } from 'react-feather';


export default function AuthRootLayout({children}){
  return (
    <html lang="en">
        <head />
        <body className="h-screen w-scren rainbow-mesh p-6">
            <GlassPane className="w-full h-full flex item-center justify-center">
              
         {children}
         </GlassPane>
        </body>
    </html>
  )
}