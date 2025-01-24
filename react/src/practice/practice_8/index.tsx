// 問題: ウィンドウリサイズの監視
// 条件
// 以下の条件を満たすReactコンポーネントを作成してください：

import { useEffect, useState } from 'react';

// ウィンドウサイズが変更されるたびに、その幅を画面に表示します。
// リサイズ処理はuseEffectを使用して管理してください。
// クリーンアップ処理:

// コンポーネントのアンマウント時に、リサイズイベントリスナーを正しく解除してください。

// ヒント
// ウィンドウの幅を取得するには、window.innerWidthを使用します。
// ウィンドウのリサイズイベントは、window.addEventListenerを使用して監視します。
// 画面のリサイズを検知するには、resizeイベントを使用します。
// イベントリスナーの解除は、window.removeEventListenerを使用します。

export const Practice8 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <>{width}</>;
};
