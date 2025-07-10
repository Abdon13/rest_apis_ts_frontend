import { redirect, type ActionFunctionArgs } from "react-router-dom"
import { addProduct } from "../services/ProductService"

export async function action({request} : ActionFunctionArgs){
    const data = Object.fromEntries(await request.formData())//Recuperando los datos del formulario
    let error = ''

    if(Object.values(data).includes('')){
        error = 'Todos los campos son obligatorios' //Mandando error si algún campo esta vació 
    }
    if(error.length){
        return error //Al retornar algo en tus acciones están disponibles en el componente por medio del useActionData
    }

    await addProduct(data)

    return redirect('/')
}