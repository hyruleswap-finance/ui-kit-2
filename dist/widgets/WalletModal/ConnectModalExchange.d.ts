import React from "react";
import { LoginExchange } from "./types";
interface Props {
    login: LoginExchange;
    onDismiss?: () => void;
}
declare const ConnectModalExchange: React.FC<Props>;
export default ConnectModalExchange;
