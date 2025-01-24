// 演習4: DOMプロパティへのアクセス
// 問題を修正して、型安全で正しいコードにしてください。

const button = document.querySelector('button');
const input = document.querySelector('input');

// ボタンがクリックされたら、入力フィールドの値の長さをコンソールに表示します。
// エラーを解消してください。

// 以下のコメントを外して問題を解く

if (button instanceof HTMLButtonElement && input instanceof HTMLInputElement) {
  button.onclick = () => {
    console.log(`Input length: ${input.value.length}`);
  };
}

// 解答例
// const buttonAnswer = document.querySelector('button');
// const inputAnswer = document.querySelector('input');

// if (button && input) {
//   button.onclick = () => {
//     console.log(`Input length: ${input.value.length}`);
//   };
// }
