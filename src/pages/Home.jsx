import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    service.getPosts([])
    .then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  }, [])

    return (
    posts.length === 0 ? (
      <div className="w-full py-20 bg-gradient-to-b from-white via-indigo-50 to-white text-center">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-6">
            <svg
              className="w-24 h-24 text-indigo-300 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405M19 21l-4-4m-5.5 2a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
              />
            </svg>
            <h1 className="text-3xl font-semibold text-gray-800">
              Please log in to view the posts
            </h1>
            <p className="text-gray-500 text-lg">
              Sign in to unlock content curated just for you.
            </p>
            <Link to={"/login"}>
            <button className="cursor-pointer px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
              Login Now
            </button>
            </Link>
          </div>
        </Container>
      </div>
    ) : (
      <div className="w-full py-16 bg-gradient-to-b from-white via-slate-50 to-white">
                  <div className="absolute top-18 left-0 w-full z-10">
    <svg className="w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#e0e7ff" d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,122.7C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    </svg>
  </div>
        <Container>
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        </Container>
      </div>
    )
  );
}

export default Home