//Guardar la api key
const key = '46da7c9173795797765bce8449a115ed'
const requestCity = async (city)=> {
    const baseURL = ''
    const query =`?q=${city}&appid=${key}`;
    const response =await fetch(baseURL + query)

    const data = await response.json();
    console.log(data)
};
requestCity('Japon')