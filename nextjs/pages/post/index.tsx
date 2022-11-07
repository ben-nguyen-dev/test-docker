import type { NextPage } from 'next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import postService from '../../services/Posts/postService';

const Home: NextPage = () => {
    const queryClient = useQueryClient();

    const getPosts = async () => {

            return postService.getPost();
    };

    const query = useQuery({ queryKey: ['get-posts'], queryFn: getPosts });

    // console.log('a 💩', {a: query?.data}, '');
    // console.log('isError 💩', {isError}, '');

    // if(isLoading) {
    //     return <div>Loading...</div>
    // }
    console.log('query 💩', {query: query.error}, '');

    return (
        <div>
            <h1 className="text-2xl font-bold underline">Hello world!</h1>
            {query.data?.data?.map((data: any) => <div>{data.title}</div>)}
        </div>
    );
};

export default Home;
