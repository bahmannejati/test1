import React, { useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';




// --- local
import ProductItem from '../product-item/ProductItem';
import CompareTable from '../compare-table/CompareTable';
import { loadingData, loadingDataSuccess, loadingDataFailed } from '../../redux/actions';
import './style.css'




const ProductCompareWrapper = () => {

    // hooks
    const dispatch = useDispatch()
    const loadingStatus = useSelector(state => state.loadingStatus)
    const items = useSelector(state => state.items)


    useEffect(() => {
        
        dispatch(loadingData())

        axios({
            url: 'http://dummy.restapiexample.com/api/v1/employees',
        }).then((response) => {
            let data = response.data.data

            dispatch(loadingDataSuccess(data))
        }).catch((error) => {
            dispatch(loadingDataFailed(error))
        })

    }, [])



    // render
    return (
        <div className="wrapper">
            <div className="item-wrappers">
                {loadingStatus === "loading" && <>
                    loading...
                </>}
                {loadingStatus === "failed" && <>
                    error loading data
                </>}
                {loadingStatus === "success" && <>
                    {items.map((item, index) => 
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            index={index}
                            name={item.employee_name}
                            salary={item.employee_salary}
                            age={item.employee_age}
                        />
                    )}
                </>}
            </div>

            <CompareTable />
        </div>
    )
}

export default ProductCompareWrapper