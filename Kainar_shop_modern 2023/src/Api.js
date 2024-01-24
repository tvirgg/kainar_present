import axios from 'axios';
export const UserAPI = {
    GetGoodData() {
        return axios.get(`http://localhost:8000/goodsdata`);
    },
    GetBlogPosts() {
        return axios.get(`http://localhost:8000/Posts`);
    }
}


