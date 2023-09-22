import request from "./request"

const baseUrl = `http://localhost:8080`
export const getOrgs = () => 
    request({
        url: `${baseUrl}/api/org/list`,
        method: 'GET'
    })

