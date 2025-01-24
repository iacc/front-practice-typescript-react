// 問題1: useStateを使ったカウンター
// 次の条件を満たすカウンターコンポーネントを作成してください：

import { useState } from 'react';

// 初期値を0に設定します。
// 「増加」「減少」「リセット」の3つのボタンを追加します。
// ボタンをクリックすると、それぞれの機能が正しく動作します。

export const Practice6 = () => {
  const start = 0;
  const [count, setCount] = useState<number>(start);
  const handleIncrease = (num: number) => {
    num++;
    num++;
    return num;
  };

  // const increase = () => setCount((prevCount) => prevCount + 1);
  // const increase = () => setCount(handleIncrease(count));
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  // const increase = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(start);
  return (
    <>
      {count}
      <ul>
        <li>
          <button onClick={increase}>+1</button>
        </li>

        <li>
          <button onClick={decrement}>-1</button>
        </li>

        <li>
          <button onClick={reset}>reset</button>
        </li>
      </ul>
    </>
  );
};
