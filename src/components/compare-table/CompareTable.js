import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



// --- local
import './style.css';


const CompareTable = () => {

    // hooks
    const toCompareItems = useSelector(state => state.addedToCompare)
    const items = useSelector(state => state.items)

    const compareItems = items.filter(item => toCompareItems.includes(Number(item.id)))


    return (
        <div>
            {toCompareItems.length ? <>
                <table className="compare-table" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <td className="first-column">
                                
                            </td>
                            {compareItems.map(item => (
                                <td key={item.id}>
                                    {item.employee_name}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="inner-first-column">
                                Salary
                            </td>
                            {compareItems.map(item => (
                                <td key={item.id}>
                                    {item.employee_salary}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="inner-first-column">
                                Age
                            </td>
                            {compareItems.map(item => (
                                <td key={item.id}>
                                    {item.employee_age}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </> : null}
        </div>
    )
}

export default CompareTable