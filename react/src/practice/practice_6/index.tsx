// 問題1: useStateを使ったカウンター
// 次の条件を満たすカウンターコンポーネントを作成してください：

import { Button } from '@/practice/_components/button';
import { useState } from 'react';

// 初期値を0に設定します。
// 「増加」「減少」「リセット」の3つのボタンを追加します。
// ボタンをクリックすると、それぞれの機能が正しく動作します。

// export const Practice6 = () => {
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div>
        <Button onClick={increase}>増加</Button>
        <Button onClick={decrease}>減少</Button>
        <Button onClick={reset}>リセット</Button>
      </div>
      <div>{count}</div>
    </>
  );
};
