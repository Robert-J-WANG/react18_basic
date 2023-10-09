import React, { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue);
  // 每次只有message变化，都会同步到本地ls,是副作用函数，使用useEffect,并添加依赖
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [key, message]);

  return [message, setMessage];
}
