import { API } from "../../backend";

//category calls
export const createCategory = (category, adminId) => {
    return fetch(`${API}/admin/${adminId}/category/createcategory`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
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
    return fetch(`${API}/admin/product/getcategoryProducts`, {
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
    return fetch(`${API}/admin/category/getaproduct/${productId}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, adminId, product) => {
    // http://localhost:8000/api/admin/${adminId}/product/updateProducts/${productId}
    return fetch(`${API}/admin/${adminId}/product/updateProducts/${productId}`, {
            method: "PUT",
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


export const getAllProducts = (storeId) => {
    return fetch(`${API}/admin/store/${storeId}/allproducts`, {
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