import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage, content}) {
  const [imageUrl, setImageUrl] = useState("")
  console.log("id:", $id, " title:", title, " featuredImage:", featuredImage)
  useEffect(() => {
    const image = async () => {
      const url = await service.getFilePreview(featuredImage)
      console.log("myUrl:", url)
      setImageUrl(url)
    }
    if(featuredImage){
      image()
    }
  }, [featuredImage])
  return (
    <Link
    to={`/post/${$id}`}
    >
        <div className="w-full max-w-sm bg-white rounded-[2rem] border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden group relative">
  {/* Image Section */}
  <div className="w-full h-52 overflow-hidden bg-gray-50">
    <img
      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
      src={imageUrl}
      alt={title}
    />
  </div>

  {/* Decorative soft curve (Apple style splash feel) */}
  <div className="absolute -bottom-3 left-0 right-0 h-5 bg-[#fdf4e7] rounded-b-full blur-[3px] z-0" />

  {/* Content */}
  <div className="p-6 relative z-10 bg-white">
    <h2 className="text-xl font-semibold text-gray-800 text-center font-sans tracking-wide">
      {title}
    </h2>
    <p className="text-sm text-gray-500 text-center mt-1 font-light">
      Read more
    </p>
  </div>
</div>

    </Link>
  )
}

export default PostCard
