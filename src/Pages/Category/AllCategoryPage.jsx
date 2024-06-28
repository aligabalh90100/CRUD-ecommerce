import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Util/Pagination";

import AllCategoryPageHook from "../../logicHook/category/allCategoryPage";
const AllCategoryPage = () => {
  const { data, pageCount, getPage } = AllCategoryPageHook();
  return (
    <div style={{ minHeight: "760px" }}>
      <CategoryContainer data={data} />
      {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage} />}
    </div>
  );
};

export default AllCategoryPage;
