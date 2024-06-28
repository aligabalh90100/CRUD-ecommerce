import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Util/Pagination";
import AllBrandPageHook from "../../logicHook/brand/allBrandPageHook";

const AllBrandPage = () => {
  const { brand, loading, getPage, pageCount } = AllBrandPageHook();
  return (
    <div>
      <BrandContainer brand={brand} loading={loading} />
      <Pagination onPress={getPage} pageCount={pageCount} />
    </div>
  );
};

export default AllBrandPage;
