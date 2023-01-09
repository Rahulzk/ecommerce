import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    products: [],
    sorting_value: 'lowest',
    filter_value: [],
    filters: {
        text: '',
        category: 'all',
        company: 'all',
        price: 0,
        maxPrice: 0,
        minPrice: 0
    },
    product_detail: {},


}

export const productsReducer = createReducer(initialState, {
    setproducts: (state, action) => {
        state.products = action.payload;
        state.filter_value = action.payload;
    },

    setSortingValue: (state, action) => {
        state.sorting_value = action.payload
    },

    sortProducts: (state) => {
        let newFilterValue;
        let initialFilterValue = state.filter_value;
        let tempSortValue = state.sorting_value;


        if (tempSortValue === 'a-z') {
            newFilterValue = initialFilterValue.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
        }

        if (tempSortValue === 'z-a') {
            newFilterValue = initialFilterValue.sort((a, b) => {
                return b.name.localeCompare(a.name);
            })
        }

        if (tempSortValue === 'lowest') {
            const helper = (a, b) => {
                return a.price - b.price;
            };
            newFilterValue = initialFilterValue.sort(helper)
        }
        if (tempSortValue === 'highest') {
            const helper = (a, b) => {
                return b.price - a.price;
            };
            newFilterValue = initialFilterValue.sort(helper);
        }

        state.filter_value = newFilterValue;

    },

    setFilterValue: (state, action) => {
        const { name, value } = action.payload;
        state.filters = { ...state.filters, [name]: value }
    },

    filterProducts: (state) => {
        const { text, category, company, price } = state.filters;

        // if(!text  || category==='all' || company==='all'){
        //     state.filter_value = state.products;
        //     return;
        // }

        let flag = false;

        let tempFilterProducts = state.products;
        let newFilterProducts;


        if (price) {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.price <= price;
            })
            flag = true;
        }

        if (text) {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.name.toLowerCase().includes(text);
            })
            flag = true;
        }

        if (category !== 'all') {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.category === category;
            })
            flag = true;
        }


        if (company !== 'all') {
            newFilterProducts = tempFilterProducts.filter((curr) => {
                return curr.company === company;
            })
            flag = true;
        }


        if (!flag) newFilterProducts = state.products;
        state.filter_value = newFilterProducts;
    },

    setPriceRange: (state,) => {
        const { products } = state;

        const priceArr = products.map((item) => (item.price));
        const maxPrice = Math.max(...priceArr);

        state.filters.price = maxPrice;
        state.filters.maxPrice = maxPrice;
    },

    setProductDetail: (state, action) => {
        state.product_detail = action.payload;
    }

})