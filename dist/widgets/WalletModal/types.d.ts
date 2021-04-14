import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare type ConnectorId = "authereum" | "fortmatic" | "frame" | "injected" | "portis" | "squarelink" | "torus" | "walletconnect" | "walletlink" | "bsc";
export declare type Login = (connectorId: ConnectorId) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorId;
}
export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc"
}
export declare type LoginExchange = (connectorId: ConnectorNames) => void;
export interface ConfigExchange {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
}
