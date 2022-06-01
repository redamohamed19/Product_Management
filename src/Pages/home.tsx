import React, { useState } from 'react';
import ProductList from  "../component/ProductList";
import Navbar2 from  "../component/navbar2";

import Form from "../component/form"

import Modal from "../component/Modal/Modal"






function Home() {
  const [ModalV, SetModalV] = useState(false);
  return (
    <div className=''>
<Navbar2 xdata="{ open: true }" SetModalV={SetModalV}/>
<Modal      
            title=''
						visible={ModalV}
						onClose={() => {
							SetModalV(false);
						}}
					>
				<Form/>
					</Modal>
					<ProductList/>

    </div>
  );
}

export default Home;
