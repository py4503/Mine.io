import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [feature, setFeature] = useState("")
    const userData = useSelector((state) => state.auth.userData);
    const [imageUrl, setImageUrl] = useState("")
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post){
                    setPost(post);
                    setFeature(post.featuredImage)
                }
                else{
                    navigate("/");
                }
            });
        } else navigate("/");
    }, [slug, navigate]);
    useEffect(() => {
    const image = async () => {
      const url = await service.getFilePreview(feature)
      console.log("myUrl:", url)
      setImageUrl(url)
    }
    if(feature){
      image()
    }
  }, [feature])
    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

return post ? (
  <div className="py-10 px-4 min-h-screen bg-gradient-to-br from-white via-pink-50 to-blue-100">
    <Container>
      <div className="w-full flex justify-center mb-8 relative rounded-3xl p-2 bg-white/50 backdrop-blur-2xl border border-white/30 shadow-2xl">
        <img
          src={imageUrl}
          alt={post.title}
          className="rounded-2xl object-cover max-h-[500px] w-full shadow-2xl"
        />

        {isAuthor && (
          <div className="absolute right-6 top-6 flex space-x-3">
            <Link to={`/edit-post/${post.$id}`}>
              <Button
                bgColor="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"
                className="shadow-md hover:shadow-xl text-white"
              >
                Edit
              </Button>
            </Link>
            <Button
              bgColor="bg-gradient-to-r from-red-400 via-pink-500 to-rose-500"
              onClick={deletePost}
              className="shadow-md hover:shadow-xl text-white"
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="w-full mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
          {post.title}
        </h1>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30">
        {parse(post.content)}
      </div>
    </Container>
  </div>
) : null;

}
