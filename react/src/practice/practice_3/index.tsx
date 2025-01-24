// 演習3：条件付きレンダリング
// 以下のコードを完成させて、isLoggedInがtrueの場合「Welcome back!」、それ以外の場合「Please sign in.」と表示するようにしてください。

export const Practice3 = () => {
  let isLoggedIn: boolean = true;
  let result = "";
  if (isLoggedIn) {
    result = 'Welcome back!';
  } else {
    result = 'Please sign in.';
  }
  return <div>{result}</div>;
};
