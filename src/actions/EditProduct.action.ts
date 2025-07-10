import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router-dom"
import { getProductsById, updateProduct } from "../services/ProductService"

export async function action({request, params} : ActionFunctionArgs){
    const data = Object.fromEntries(await request.formData())//Recuperando los datos del formulario
    let error = ''

    if(Object.values(data).includes('')){
        error = 'Todos los campos son obligatorios' //Mandando error si algún campo esta vació 
    }
    if(error.length){
        return error //Al retornar algo en tus acciones están disponibles en el componente por medio del useActionData
    }

    if(params.id !== undefined){
        await updateProduct(data, +params.id)

        return redirect('/')
    }
    
}

export async function loader({params} : LoaderFunctionArgs){
    if(params.id !== undefined){
        const product = await getProductsById(+params.id)
        if(!product){
            return redirect('/')
        }
        return product
    }
}
