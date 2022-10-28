import { debounce, delay, throttle } from "lodash";
import { computed, ref } from "vue";
import { IUseResquestOptions, IUseRequestRequest } from "./type";

export interface IResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}

const defaultOption = {
  // 是否开启防抖 时长
  debounce: false,
  debounceInterval: 1000,
  // 是否开启节流 时长
  throttle: false,
  throttleInterval: 1000,
  // 是否轮询
  polling: false,
  pollingInterval: 5000,
  // 是否自动调用
  autoRun: true,
  // 调用完毕可执行的函数
  onFinish: () => {},
};

const useRequest = <
  // 泛型
  ParamType = any, // 参数的类型
  PromiseRequestType = any, //  返回的data的类型
  DataType = IResponse<PromiseRequestType> // 返回的data的类型的外层
>(
  PromiseRequest: (p: ParamType) => Promise<DataType>, // 异步请求函数
  params: ParamType, // 参数
  opt?: IUseResquestOptions<DataType> // 配置项
): IUseRequestRequest<ParamType, DataType> => {
  type Params = ParamType;

  const option = Object.assign({}, defaultOption, opt);
  const loading = ref(false);
  const data = ref<DataType>();

  // 调用方法
  const run = async (): Promise<void> => {
    loading.value = true;
    // 调用请求方法
    data.value = await PromiseRequest(params);

    loading.value = false;
    option.onFinish && option.onFinish(data.value);
  };
  const runParams = async (_params: ParamType): Promise<void> => {
    loading.value = true;
    // 调用请求方法
    data.value = await PromiseRequest(_params);

    loading.value = false;
    option.onFinish && option.onFinish(data.value);
  };

  // 轮询
  const polling = async () => {
    loading.value = true;
    data.value = await PromiseRequest(params);
    loading.value = false;
    option.onFinish && option.onFinish(data.value);
    delay(polling, option.pollingInterval);
  };

  option.autoRun && run();
  option.polling && polling();

  // 计算最终使用的函数
  const runComputed = computed(() => {
    // 判断是否开启防抖
    if (option.debounce)
      return {
        run: debounce(run, option.throttleInterval) as () => Promise<void>,
        runParams: debounce(runParams, option.throttleInterval) as (
          p: Params
        ) => Promise<void>,
      };
    // 判断是否开启节流
    if (option.throttle)
      return {
        run: throttle(run, option.throttleInterval) as () => Promise<void>,
        runParams: throttle(runParams, option.throttleInterval) as (
          p: Params
        ) => Promise<void>,
      };
    return { run, runParams };
  });

  return {
    loading,
    data,
    run: runComputed.value.run, // 手动请求方法
    runParams: runComputed.value.runParams, // 带参
  };
};

export default useRequest;
