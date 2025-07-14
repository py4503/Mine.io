import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        service.getPosts([])
        .then((posts) => {
            if(posts){
                console.log("all posts", posts.documents)
                setPosts(posts.documents);
            }
        })
    }, [])
    console.log("setted value:", posts)
  return (
   <div className="w-full py-20 bg-gradient-to-b from-white via-indigo-50 to-white relative overflow-hidden">
  {/* Wavy SVG Background (top) */}
  <div className="absolute top-0 left-0 w-full z-0">
    <svg className="w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#e0e7ff" d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,122.7C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    </svg>
  </div>

  <Container>
    <div className="relative z-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Explore All Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </div>
  </Container>
</div>
  )
}

export default AllPost
