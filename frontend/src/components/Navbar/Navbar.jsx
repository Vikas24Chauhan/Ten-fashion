import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function Navbar() {
  return (
    <FlowbiteNavbar fluid rounded border className="py-4">
      <FlowbiteNavbar.Brand>
        <span className="text-2xl sm:text-sm md:text-xl xl:text-3xl text-gray-900 dark:text-white">
          *TEN Fashion logo*
        </span>
      </FlowbiteNavbar.Brand>

      <FlowbiteNavbar.Toggle aria-label="Toggle navigation" />

      <FlowbiteNavbar.Collapse className="sm:block md:block transition-all duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 xl:space-x-16 md:items-center justify-between">
          <FlowbiteNavbar.Link href="#" className="hidden md:block" active>
            Home
          </FlowbiteNavbar.Link>

          <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-10">
            <FlowbiteNavbar.Link href="#">About Us</FlowbiteNavbar.Link>
            <FlowbiteNavbar.Link href="#">Contact</FlowbiteNavbar.Link>
            <Dropdown
              label={
                <span className="text-gray-800 dark:text-gray-400">Shop</span>
              }
              inline
              className="dark:text-white"
            >
              <Dropdown.Item href="#mens">Men's Collection</Dropdown.Item>
              <Dropdown.Item href="#womens">Women's Collection</Dropdown.Item>
              <Dropdown.Item href="#kids">Kids' Collection</Dropdown.Item>
            </Dropdown>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex flex-row items-center justify-around gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-0 md:justify-end">
          <span className="text-gray-800 dark:text-white cursor-pointer">
            <FaSearch />
          </span>
          <span className="text-gray-800 dark:text-white cursor-pointer">
            <FaHeart />
          </span>
          <span className="text-gray-800 dark:text-white cursor-pointer">
            <FaShoppingCart />
          </span>

          <div className="flex items-center gap-2 md:gap-4">
            <Avatar
              alt="User settings"
              img="https://avatar.iran.liara.run/public/1"
              rounded
            />
            <DarkModeToggle />
          </div>
        </div>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
