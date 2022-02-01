import React, {useState, useEffect} from 'react';
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
          .then((response) => response.json())
          .then((json) => setUsers(json));
      }, []);

  return <div className='container'>
            <div className='ItemList row'>
            {users.map((user) => {
                    return (
                        <div key={user.id}  >
                            <Item 
                            data={user}
                            key={user.id} 
                            />
                        </div>
                    );
            })}
            </div>
</div>;
};

export default ItemList;
