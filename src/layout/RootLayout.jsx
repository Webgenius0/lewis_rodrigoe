import { Outlet, ScrollRestoration } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
