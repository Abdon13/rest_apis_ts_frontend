import type { ActionFunctionArgs } from "react-router-dom"
import { getProducts, updateProductAvailability } from "../services/ProductService"


export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return{}
}

export async function loader(){
  const products = await getProducts()
  return products
}

