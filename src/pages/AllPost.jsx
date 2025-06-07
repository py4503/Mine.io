import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        service.getPosts([])
        .then((posts) => {
            if(posts){
                setPosts(posts.documents);
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap p-2 w-1/4'>
        {posts.map((post) => (
            <PostCard key={post.$id} post = {post}/>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
