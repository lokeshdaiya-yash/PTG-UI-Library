import { authClass } from "../auth/services/auth.service";

export const restPost = async (url:string,data:any) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response =>
      response.json().then(data => ({ status: response.status, body: data }))
    )
    .catch(err => console.log(err))
    return response
    // return response.json();
  };

  export const restPostToken = async (url:string,data:any) => {
    let getToken= JSON.parse(authClass.getToken())
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":getToken.accessToken
      },
      body: JSON.stringify(data)
    }).then(response =>
      response.json().then(data => ({ status: response.status, body: data }))
    )
    .catch(err => console.log(err))
    return response
    // return response.json();
  };
