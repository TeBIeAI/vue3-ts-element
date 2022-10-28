export const setStorage = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key: string): any => {
  return JSON.parse((window.localStorage as any).getItem(key))
}

export const removeStorage = (key: string) => {
  window.localStorage.removeItem(key)
}