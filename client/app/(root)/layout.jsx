
import StreamVideoProvider from '@/Provider/StreamClient';

const RootLayout = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
