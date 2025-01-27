import { toast } from "react-toastify";

const getStoredCart = () => {
    const storedListStr =localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredCart = (id) => {
    const storedList = getStoredCart();
    if(storedList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart list', storedListStr);
        toast("Add to cart successfully")
    }
}
// -----------------

const getStoredWishlist = () => {
    const storedWishListStr =localStorage.getItem('read-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedWishList = getStoredCart();
    if(storedWishList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish list', storedWishListStr);
        toast("Add to WishList successfully")
    }
}


export {addToStoredCart, getStoredCart,getStoredWishlist,addToStoredWishlist};