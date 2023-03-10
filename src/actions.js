import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction({request}){
    // get the form data
    const formData = await request.formData()

    // construct new movie
    const newMovie = {
        movieName: formData.get("movieName"),
        genre: formData.get("genre"),
        rating: formData.get("rating"),
        poster: formData.get("poster")
    }

    // request to create route in the backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    })

    // redirect back to the index page
    return redirect("/")
}

// Update function
export async function UpdateAction({ request, params }){
    // get the form data
    const formData = await request.formData()

    // construct new movie
    const newMovie = {
        movieName: formData.get("movieName"),
        genre: formData.get("genre"),
        rating: formData.get("rating"),
        poster: formData.get("poster")
    };

    // request to update route in the backend
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
    })

    // redirect back to the index page
    return redirect("/")
}

// Delete Function
export async function DeleteAction ({ params }) {
    const id = params.id
    await fetch(url + id + "/", {
        method: "delete"
    })
    // redirect to main page
    return redirect("/")
}