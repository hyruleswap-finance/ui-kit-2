import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export type ConnectorId =
  | "authereum"
  | "fortmatic"
  | "frame"
  | "injected"
  | "portis"
  | "squarelink"
  | "torus"
  | "walletconnect"
  | "walletlink"
  | "bsc";

export type Login = (connectorId: ConnectorId) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorId;
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type LoginExchange = (connectorId: ConnectorNames) => void;

export interface ConfigExchange {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}