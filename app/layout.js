import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/dashboard/NavBar';
import { Card } from '@/components/ui/card';
import { Toaster } from 'sonner';
import ProviderContainer from '@/provider/providerContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ProviderContainer>
                <body className={inter.className}>
                    <div className="w-full h-screen flex flex-col ">
                        <NavBar />

                        <div
                            className={`w-full h-full flex flex-grow overflow-hidden space-x-4 p-4`}
                        >
                            <Card className="w-full h-full overflow-y-auto">
                                <div className="w-full h-full px-2">
                                    {children}
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Toaster />
                </body>
            </ProviderContainer>
        </html>
    );
}
