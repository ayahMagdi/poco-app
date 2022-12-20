import React from 'react'

function ProductDescription(props) {
  return (
    <div className={props.classes}>
       <div className='wrapper'>
       <div className='description'>
            <p>Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!</p>
            <p><span className='bold'>Ingredients:</span> Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss Cheese</p>
        </div>
        <div className='product__table'>
            <div className='type'>
                <div><h3>Pizza</h3><span>28 cm size</span></div>
                <div><h3>728</h3><span>Energy/Kj</span></div>
                <div><h3>1054</h3><span>energy/kcal</span></div>
                <div><h3>68</h3><span>fat/g</span></div>
                <div><h3>25</h3><span>gluxit /g</span></div>
                <div><h3>48</h3><span>sugar/g</span></div>
                <div><h3>548</h3><span>protein/g</span></div>
            </div>
            <div className='allergies'>
                <h3>allergies</h3>
                <p>Egg</p>
                <p>milk protein</p>
                <p>sesame</p>
                <p>lactose</p>
                <p>gluten</p>
                <p>mustard</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProductDescription