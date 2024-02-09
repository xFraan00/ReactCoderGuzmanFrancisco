import { useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection, } from "firebase/firestore"



import { useParams } from "react-router-dom"

const ContenedorItems = ({greating}) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect (() => {

       const productsCollection = collection(db,"products")

        getDocs(productsCollection)
            .then(QuerySnapshot =>{
                const productAdapted = QuerySnapshot.docs.map(doc =>{
                    const fields = doc.data()
                    return{ id: doc.id, ...fields}
                })
                setProducts(productAdapted)
            })



 /*       const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })*/
    }, [categoryId])

    return(
        <div>
            <h1>{greating}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ContenedorItems