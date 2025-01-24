export const Button = ({ name, price }: { name: string; price: number }) => {
  return <button onClick={() => alert(`${name}:${price}`)}>詳細を見る</button>;
};
