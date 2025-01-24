// 問題1: useStateを使ったカウンター
// 次の条件を満たすカウンターコンポーネントを作成してください：

import { useState } from 'react';

// 初期値を0に設定します。
// 「増加」「減少」「リセット」の3つのボタンを追加します。
// ボタンをクリックすると、それぞれの機能が正しく動作します。

export const Practice6 = () => {
  const start = 0;
  const [num, countNum] = useState<number>(start);
  const increment = () => countNum(num + 1);
  const decrement = () => countNum(num - 1);
  const reset = () => countNum(start);
  return (
    <>
      {num}
      <ul>
        <li>
          <button onClick={increment}>+1</button>
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
