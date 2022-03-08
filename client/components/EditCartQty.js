import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EditCartQty = () => {
  const [orderQty, setOrderQty] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});
  const [cartData, setCartData] = useState(() => {
    const localStorageData = JSON.parse(localStorage.getItem('data'));
    return localStorageData || [];
  });

  const { id } = useParams();

  useEffect(() => {
    const item = cartData.filter((item) => {
      return item.id === id;
    });
    setSelectedItem(item[0]);
    setOrderQty(item[0].quantity);
  }, []);

  useEffect(() => {
    // o: you are doing this in multiple places... makes sense to make it into
    //  a function
    localStorage.setItem('data', JSON.stringify(cartData));
  }, [cartData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSelectedItem = { ...selectedItem };
    newSelectedItem.quantity = orderQty;
    const filteredCartData = cartData.filter((item) => {
      return item.id !== id;
    });
    setCartData([...filteredCartData, newSelectedItem]);
    history.back();
  };

  console.log('Selected Item: ', selectedItem);

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedItem.description}</h3>
      <label htmlFor="qty">Quantity: </label>
      <input
        type="number"
        id="qty"
        name="quantity"
        value={orderQty}
        min={1}
        max={selectedItem.quantityOnHand}
        onChange={(e) => setOrderQty(e.target.value)}
      />
      <h5>Unit Price: ${selectedItem.price}</h5>
      <h5>Extended Price: ${(selectedItem.price * orderQty).toFixed(2)}</h5>
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCartQty;
