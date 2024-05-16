import noticeStore, { NoticeStore } from "@/mobx/stores/NoticeStore";
import cryptoPriceStore, { CryptoPriceStore } from "./CryptoPriceStore";

export type RootStore = {
  noticeStore: NoticeStore;
  cryptoPriceStore: CryptoPriceStore;
};

const rootStore: RootStore = {
  noticeStore,
  cryptoPriceStore,
};

export default rootStore;
