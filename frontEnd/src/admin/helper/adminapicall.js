import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//get all categories
export const getCategories = () => {
    return fetch(`${API}/admin/category/getallcategory`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//products calls

//create a product
export const createaProduct = (storeId, adminId, product) => {
    return fetch(`${API}/admin/${adminId}/product/createproduct/${storeId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: product
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//get all products
export const getProducts = () => {
    return fetch(`${API}/products`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//delete a product

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//get a product

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: product
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createAdmin = (admin) => {
    return fetch(`${API}/admin/setPasscode`, {
            method: "POST",
            headers: {
                Accept: "application/json",

            },
            body: admin
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createStore = (adminId, store) => {
    console.log(store)
    return fetch(`${API}/admin/${adminId}/store/createstore`, {
            method: "POST",
            headers: {
                Accept: "application/json",

            },
            body: store
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const allStores = () => {
    return fetch(`${API}/admin/category/getallstores`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getStoreData = (storeId) => {
    return fetch(`${API}/admin/getStoreInfo/${storeId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const deleteStoreHere = (adminId, storeId) => {
    return fetch(`${API}/admin/${adminId}/store/deletestore/${storeId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}