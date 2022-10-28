import { Ref } from "vue";

export interface IUseResquestOptions<T = any> {
  // 是否开启防抖 时长
  debounce?: boolean;
  debounceInterval?: number;
  // 是否开启节流 时长
  throttle?: boolean;
  throttleInterval?: number;
  // 是否轮询
  polling?: boolean;
  pollingInterval?: number;
  // 是否自动调用
  autoRun?: boolean;
  // 调用完毕可执行的函数
  onFinish?: (data: T) => void;
}

export interface IUseRequestRequest<D, T> {
  loading: Ref<boolean>;
  data: Ref<T | undefined>;
  run: (...args: any[]) => Promise<void>; // 手动请求方法
  runParams: (params: D) => Promise<void>; // 带参数的请求方法
}
