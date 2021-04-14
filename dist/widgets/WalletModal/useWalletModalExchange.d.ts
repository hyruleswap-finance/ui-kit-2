import { LoginExchange } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModalExchange: (login: LoginExchange, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModalExchange;
