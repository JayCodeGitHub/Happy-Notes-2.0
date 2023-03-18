import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import AppProviders from "@/providers/appProviders";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
