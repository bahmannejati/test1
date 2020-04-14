import React from 'react';
import { useDispatch, useSelector } from 'react-redux';




// --- local
import { toggleCompare } from '../../redux/actions';
import './style.css';
import dummyPic1 from './assets/pic1.jpg';
import dummyPic2 from './assets/pic2.jpg';
import dummyPic3 from './assets/pic3.jpg';
import dummyPic4 from './assets/pic4.jpg';




const images = [ dummyPic1,dummyPic2,dummyPic3,dummyPic4 ]

const getDummyRandomImage = (index) => images[index % images.length]





const ProductItem = (props) => {

    // hooks
    const dispatch = useDispatch()
    const toCompareItems = useSelector(state => state.addedToCompare)

    const itemIsAdded = toCompareItems.find(id => id === Number(props.id))


    // render
    return (
        <div className="product-item">
            <div className="product-spacer">

                <div className="image-holder">
                    <img src={getDummyRandomImage(props.index)} />
                    <div className={`overlay ${itemIsAdded ? 'active' : ''}`}>
                        <button className="compare-button" onClick={() => dispatch(toggleCompare(Number(props.id)))}>
                            {itemIsAdded ? 'REMOVE' : 'COMPARE'}
                        </button>
                    </div>
                </div>

                <div className="pro-detail">
                    <p className="pro-title">
                        <strong>
                            {props.name}
                        </strong>
                        <span className="salary-holder">
                            {props.salary}
                        </span>
                    </p>

                    <p className="pro-description">
                        age {props.age}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ProductItem