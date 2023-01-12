// import React, { useEffect, useState } from "react";
// import ProductForm from "../components/ProductForm/ProductForm";
// import ShowProduct from "../components/ShowProduct/ShowProduct";
// import { getProducts } from "../services/admin-service";
// import Modal from "../../product/components/Modal";
// import "./Product.css";
// function Product() {
//   const [listProduct, setListProduct] = useState([]);
//   const [showAddProduct, setShowAddProduct] = useState(false);
//   const [idEdit, setIdEdit] = useState(0);
//   const [productsPerPage, setProductsPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleAddProduct = () => {
//     setShowAddProduct(!showAddProduct);
//   };

//   const handleGetProduct = async () => {
//     try {
//       const response = await getProducts();
//       setListProduct(response.data);
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const handleEditProduct = (id) => {
//     setIdEdit(id);
//     handleAddProduct();
//   };

//   const handleChangeProductPerPage = (number) => {
//     setProductsPerPage(number);
//     setCurrentPage(1);
//   };
//   const handleChangePage = (number) => {
//     setCurrentPage(number);
//   };
//   const pageNumbers = Array.from(
//     new Array(Math.ceil(listProduct.length / productsPerPage)),
//     (_, i) => i + 1
//   );
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
//   console.log(indexOfFirstProduct, indexOfLastProduct);
//   const listProductPage = listProduct.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   useEffect(() => {
//     handleGetProduct();
//     window.scrollTo(0, 0);
//     console.log(listProduct);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div class="product__container">
//       <Modal
//         visible={showAddProduct}
//         onCloseModal={() => setShowAddProduct(false)}>
//         <ProductForm
//           onGetProduct={handleGetProduct}
//           show={showAddProduct}
//           onClose={handleAddProduct}
//           product={listProduct.find((product) => product.id === idEdit)}
//           onEdit={handleEditProduct}
//           isEdit={idEdit}
//         />
//       </Modal>

//       <div class="product__title">
//         <h1>Product</h1>
//         <button onClick={handleAddProduct} class="custom-button">
//           Add Product
//         </button>
//       </div>
//       <div class="product__table__feature right__side">
//         <p>Product per page : </p>
//         <div>
//           <input
//             type="checkbox"
//             id="5"
//             onChange={() => handleChangeProductPerPage(5)}
//             checked={productsPerPage === 5}
//           />
//           <label for="5">5</label>

//           <input
//             type="checkbox"
//             id="10"
//             onChange={() => handleChangeProductPerPage(10)}
//             checked={productsPerPage === 10}
//           />
//           <label for="10">10</label>
//         </div>
//       </div>

//       <div>
//         <div class="product__table">
//           <div class="table__header">
//             <div>ID</div>
//             <div>Name</div>
//             <div>Email</div>
//             <div>Password</div>
//             <div>Action</div>
//           </div>
//         </div>
//         {listProductPage?.length > 0 &&
//           listProductPage?.map((item, index) => {
//             return (
//               <ShowProduct
//                 onGetProduct={handleGetProduct}
//                 id={item.id}
//                 firstName={item.firstName}
//                 lastName={item.lastName}
//                 email={item.email}
//                 password={item.password}
//                 onEdit={handleEditProduct}></ShowProduct>
//             );
//           })}
//       </div>
//       <div class="right__side">
//         {pageNumbers.map((number) => (
//           <button
//             onClick={() => handleChangePage(number)}
//             className={`number__page ${
//               currentPage === number ? "active" : ""
//             }`}>
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;
