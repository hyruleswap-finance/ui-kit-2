import React from "react";
import { useModal } from "../Modal";
import ConnectModalExchange from "./ConnectModalExchange";
import AccountModal from "./AccountModal";
import { LoginExchange } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModalExchange = (login: LoginExchange, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModalExchange login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModalExchange;
