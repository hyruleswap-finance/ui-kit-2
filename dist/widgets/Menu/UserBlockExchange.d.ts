import React from "react";
import { LoginExchange } from "../WalletModal/types";
interface Props {
    account?: string;
    login: LoginExchange;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
