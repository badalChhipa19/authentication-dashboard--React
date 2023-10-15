import ProductChart from "../product-chart/product-chart.component";
import AddUsers from "../add-user/add-user.component";

import "./product.style.scss";

const Product = () => {
  return (
    <div className="dashboard__product">
      <ProductChart />
      <AddUsers />
    </div>
  );
};

export default Product;
