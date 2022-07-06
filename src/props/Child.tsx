interface ChildProp {
  color: string;
  onClick: () => void;
}

// export const Child = ({ color }: ChildProp) => {
//   return <div>{color}</div>;
// };

export const ChildAsFC: React.FC<ChildProp> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Please click here</button>
    </div>
  );
};
