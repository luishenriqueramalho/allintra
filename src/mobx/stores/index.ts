import noticeStore, { NoticeStore } from "@/mobx/stores/NoticeStore";

export type RootStore = {
  noticeStore: NoticeStore;
};

const rootStore: RootStore = {
  noticeStore,
};

export default rootStore;
