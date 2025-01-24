interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
