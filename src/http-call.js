import axios from'axios'

export default axios.create({
    baseURL:"http://localhost:4747/api",header:{
        "Content-type":"application/json"
    }
});