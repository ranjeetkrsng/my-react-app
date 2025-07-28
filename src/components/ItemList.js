import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
  console.log("items", items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between m-2 p-4 bg-gray-100 border-gray-300 border-b-2 text-left"
        >
          <div className="w-9/12">
            <div className="py-2">
              <h3 className="py-2 text-lg">
                {item.card.info.name} - ₹{item.card.info.price / 100}
              </h3>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 py-4">
            <div className="absolute">
            <button className="p-2 bg-black text-white mx-9 rounded-lg shadow-lg"
            onClick={() => handleAddItem(item)}
            >Add+</button>
            </div>
            <img
              className="w-full rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
