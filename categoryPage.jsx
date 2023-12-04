import SideBar from "./src/components/sideBar";
import NavBar from "./src/components/navBar";
import ACard from "./src/components/ACard";
const CategoryPage = () => {
  
  return (
    <>
      <div className="flex">
        <NavBar />
        <SideBar />
        <ACard />
      </div>
    </>
  );
};

export default CategoryPage;
