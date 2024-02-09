import { useState, useEffect } from "react";
//import { getProductById } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() =>{

      const productDocument = doc(db, "products", itemId)
        
        getDoc(productDocument)
        .then(QueryDocumentSnapshot =>{
            const fields = QueryDocumentSnapshot.data()
            const productAdapted = { id: QueryDocumentSnapshot.id, ...fields}
            setProduct(productAdapted)
        })

  /*      getProductById(itemId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })*/
    }, [itemId])

    return (
        <div className="ItemDetailConteiner">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer