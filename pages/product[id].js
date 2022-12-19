import { withSSRContext, DataStore, Amplify } from "aws-amplify";
import { Product } from "../src/models";
import { ProductDetail } from "../src/ui-components";
import { serializeModel} from "@aws-amplify/datastore/ssr";

export async function getStaticPaths({ req }){
   const SSR = withSSRContext({ req });
   const products = await SSR.DataStore.query(Product);
   return {
    paths: products.map(product =>({params: {id: product.id}})),
    fallback: true
   }

}

export async function getStaticProps (context) {
    const SSR = withSSRContext ({context}) 
    const product = await SSR.DataStore.query(Product, context.params.id)
    return {
        props: { product: serializeModel(product)}
    }
}

export default function ProductDet({product}) {
    return <ProductDetail product={product}/>
}
