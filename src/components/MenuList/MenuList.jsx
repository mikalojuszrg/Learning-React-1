import { singleMenu, coupleMenu, familyMenu } from "./const";

const MenuList = ({ customerType }) => {
  const getCustomerMenu = (type) => {
    if (type === "single") {
      return singleMenu;
    } else if (type === "couple") {
      return coupleMenu;
    } else {
      return familyMenu;
    }
  };

  const customerMenu = getCustomerMenu(customerType);

  return (
    <div>
      <ol>
        {customerMenu.map((menuItem) => (
          <li key={menuItem.itemName}>
            {menuItem.itemName} {menuItem.price}
          </li>
        ))}
      </ol>
      {/* <ol>
        {customerType.map((item) => {
          return <li>{item}</li>;
        })}
      </ol> */}
    </div>
  );
};

export default MenuList;
