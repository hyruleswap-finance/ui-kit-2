import React from "react";
import { LoginExchange, ConfigExchange } from "./types";
interface Props {
    walletConfig: ConfigExchange;
    login: LoginExchange;
    onDismiss: () => void;
    mb: string;
}
declare const WalletCardExchange: React.FC<Props>;
export default WalletCardExchange;
