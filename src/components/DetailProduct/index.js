import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";

import "./DetailProduct.css";

const DetailProduct = ({ data, title, loading }) => {
  const [indexImage, setIndexImage] = useState(0);
  const navigate = useNavigate();
  const handleNavigateCategory = (categoryName) => {
    navigate(`/${categoryName}`);
  };
  const handleNextImage = () => {
    setIndexImage((prev) => {
      if (prev === data?.images?.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePreventImage = () => {
    setIndexImage((prev) => {
      if (prev === 0) {
        return data?.images?.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <>
      {loading ? (
        <div className="DetailProduct__loading">
          <h3 className="DetailProduct__title">{title}</h3>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className="DetailProduct__title">{title}</h3>
          <div className="DetailProduct">
            <div
              className="DetailProduct__images"
              style={{ backgroundImage: `url(${data?.images[indexImage]})` }}
            >
              <div className="DetailProduct__images-action">
                <i
                  onClick={handlePreventImage}
                  className="fa-solid fa-angle-left"
                ></i>
                <i
                  onClick={handleNextImage}
                  className="fa-solid fa-angle-right"
                ></i>
              </div>
            </div>

            <div className="DetailProduct__info">
              <div className="DetailProduct__info-title">{data?.title}</div>
              <div className="DetailProduct__info-price">
                Price: {data?.price}
              </div>
              <div className="DetailProduct__info-description">
                {data?.description}
              </div>
              <div
                onClick={() => handleNavigateCategory(data?.category?.name)}
                className="DetailProduct__info-category"
              >
                Category: {data?.category?.name}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailProduct;
