import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

export function Filters({categories}) {
    const { filters, setFilters} = useFilters()
    const categoryId = useId()
    const priceId = useId()


    const handleFilterPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            price: e.target.value
        }))
    }

    const handleFilterCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <div className="products-filter">
            <div>
                <label htmlFor={priceId}>Price: </label>
                <input type="range" id={priceId} min="0" max="2000" value={filters.price}
                onChange={handleFilterPrice}/>
            </div>
            <div>
                <label htmlFor={categoryId}>Category: </label>
                <select className="capitalize" id={categoryId} onChange={handleFilterCategory}>
                    <option value='all'>All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category.replace('-', ' ')}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}