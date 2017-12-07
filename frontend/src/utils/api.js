const API_URL_ENV = `${process.env.REACT_APP_BACKEND}`
const API_URL = `http://localhost:3001`

   //const url = `${process.env.REACT_APP_BACKEND}/categories`;
    // Disable CORS in Chrome and set url 
    // run in terminal: 'open -a Google\ Chrome --args --disable-web-security --user-data-dir'
    //https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check
    //const url = `http://localhost:3001/categories`;


export function fetchCategories () {
    const url = `${API_URL}/categories`
  return fetch(url, {
                headers: { 'Authorization': 'whatever-you-want' },
                credentials: 'include' } )
        .then((res) => res.json())
}