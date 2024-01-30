import { TransportConfig, EIP1193RequestFn } from "viem";
import { http, createConfig, Connector } from "wagmi";
import { Chain, mainnet, polygon, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import { StoreApi } from "zustand/vanilla";

export const config = createConfig({
  chains: [mainnet, sepolia, polygon],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Create Wagmi" }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "" }), // change here
  ],
  ssr: true,
  transports: {
    [polygon.id]: http(
      "https://polygon-mumbai.g.alchemy.com/v2/-6fJNJ8dnLAZ_07CuwW52ZyW8Z2-Agpj",
      {
        key: "alchemy",
      },
    ),
    1: function (
      params: {
        chain?: Chain | undefined;
        pollingInterval?: number | undefined;
        retryCount?: number | undefined;
        timeout?: number | undefined;
      } & { connectors?: StoreApi<Connector[]> | undefined },
    ): {
      config: TransportConfig<string, EIP1193RequestFn>;
      request: EIP1193RequestFn;
      value?: Record<string, unknown> | undefined;
    } {
      throw new Error("Function not implemented.");
    },
    11155111: function (
      params: {
        chain?: Chain | undefined;
        pollingInterval?: number | undefined;
        retryCount?: number | undefined;
        timeout?: number | undefined;
      } & { connectors?: StoreApi<Connector[]> | undefined },
    ): {
      config: TransportConfig<string, EIP1193RequestFn>;
      request: EIP1193RequestFn;
      value?: Record<string, unknown> | undefined;
    } {
      throw new Error("Function not implemented.");
    },
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
