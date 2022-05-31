import React, { useState } from 'react';
import Navbar from  "../component/navbar";
import Restaurant from '../component/Restaurant';
import Dessert from "../imgs/ads/dessert.png"
import burger from "../imgs/ads/humburger.png"
import broccoli from "../imgs/icons/broccoli.png"
import burger2 from "../imgs/icons/burger.png"
import cake from "../imgs/icons/cake.png"
import meat from "../imgs/icons/meat.png"
import pizza from "../imgs/icons/pizza.png"
import sushi from "../imgs/icons/sushi.png"
import Resto1 from "../imgs/ads/Royal Sushi House.png"
import Resto2 from "../imgs/ads/Burgers & Pizza.png"
import Resto3 from "../imgs/ads/Ninja sushi.png"
import Resto4 from "../imgs/ads/Sushi master.png"
import Resto5 from "../imgs/ads/Japanese sushi.png"
import Resto6 from "../imgs/ads/Kobe.png"


import Modal from "../component/Modal/Modal"






function Home() {
  const [ModalV, SetModalV] = useState(false);
  return (
    <div className=''>
<Navbar SetModalV={SetModalV} />
<Modal      
            title=''
						visible={ModalV}
						onClose={() => {
							SetModalV(false);
						}}
					>
						
					</Modal>

    </div>
  );
}

export default Home;
