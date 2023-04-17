import { request } from "./http/http"; 

async function Get_headphons () {
const headphonsList = []
await request("headphons")
.then (response => response.json()) 
.then(data => headphonsList.push(...data));
return headphonsList
}

export default Get_headphons