import React from "react";
import Popover from "@mui/material/Popover";
import './navbar.css'

const PopoverMenu = ({anchorEl,handleClose,open,id}) => {

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }
    }
    className="navPopover"
      >
        <div className="popoverContainer">
          <div>
            <ul className="popoverContainerList">
              <li>Web Design</li>
              <li>Social Media</li>
              <li>SEO</li> 
              <li>Paid Campaign</li>
              <li>Online Marketing</li>
              <li>Marketing Strategy</li>
            </ul>
          </div>
          <div>
            <ul className="popoverContainerList">
              <li>Web Design</li>
              <li>Social Media</li>
              <li>SEO</li> 
              <li>Paid Campaign</li>
              <li>Online Marketing</li>
            </ul>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default PopoverMenu;
