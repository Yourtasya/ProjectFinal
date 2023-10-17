import React from "react";

import "../styles/DropdawnMenu.css";

export const Dropdown = ({ trigger, menu }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="DropdawnMenu">
          {menu.map((menuItem: any, index: any) => (
            <li key={index} className="ItemButtonInDropDawn">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
