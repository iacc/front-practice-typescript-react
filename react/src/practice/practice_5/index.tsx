// 演習５：商品リストの作成

import { Button } from '@/practice/_components/button';
import { Counter } from '@/practice/practice_6';

// MUST要件
// 商品リストを表示する。(例：Apple, Banana, Cherry)
// 商品ごとに「詳細を見る」ボタンを表示する。
// ボタンがクリックされたとき、商品名と価格をalertで表示する。(例：Apple: 100)

// WANT追加要件
// 繰り返し処理を使って、商品リストを表示する。
// ボタンコンポーネントを作成して、商品ごとに再利用する。
// ボタンコンポーネントを別のファイルに切り出す。

export const Practice5 = () => {
  const products = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 150 },
    { id: 3, name: 'Cherry', price: 200 },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
          <Button
            onClick={() => {
              alert(`商品名: ${product.name} 価格: ${product.price}`);
            }}
          >
            詳細を見る
          </Button>
          <Counter />
        </li>
      ))}
    </ul>
  );
};
