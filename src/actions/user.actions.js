import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE"

export const getUser = (uid) =>{
    // on met uid en paramètre pour qu'il se retrouve dans la requête plus bas
    return (dispatch) =>{
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) =>{
                dispatch({ type: GET_USER, payload: res.data})
            })
            .catch((err)=>console.log(err))
    }
}

export const uploadPicture = (data, id) =>{
    return(dispatch)=>{
        return axios
        //envoi à la base de donnée
            .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
            .then((res)=>{
                return axios
                    .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
                    .then ((res)=>{
                        //va changer le chemin de la data dans le store ...
                        dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture})
                    })
            })
            .catch((err) => console.log(err));
    }
}