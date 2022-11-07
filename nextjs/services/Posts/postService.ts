import authorizedRequest from '../authoriedRequest';

class PostService {
    async getPost() {
        return await authorizedRequest.get('https://jsonplaceholder.typicode.com/postsss');
    }
}

const postService = new PostService();

export default postService;
