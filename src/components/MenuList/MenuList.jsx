const MenuList = ({ customerType }) => {
  return (
    <div>
      <ol>
        {customerType.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default MenuList;
