import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/houslylogo.png";
import { getBlogByIdApi, getAllBlogsApi, getCommentsApi, addCommentApi } from "../api/blogApi";



const socialIcons = {
  facebook: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
  ),
  instagram: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  ),
  linkedin: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  ),
  twitter: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
  ),
  youtube: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
    </svg>
  ),
};

const FooterSocial = ({ href, children, mobile = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      mobile
        ? "w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
        : "w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
    }
  >
    {children}
  </a>
);

const CalendarIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className="text-[#0076d8]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
  </svg>
);

const UserIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className="text-[#0076d8]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className="text-[#0076d8]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
  </svg>
);

const TagIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className="text-[8px]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
  </svg>
);

const BreadcrumbText = "Blog Details".split("");

const BlogsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await getBlogByIdApi(id);
        if (res.data) {
          setPost({
            ...res.data,
            tags: typeof res.data.tags === "string" ? JSON.parse(res.data.tags) : (res.data.tags || []),
          });
          // Fetch all blogs for sidebar + comments in parallel
          const [allRes, commentsRes] = await Promise.all([
            getAllBlogsApi(),
            getCommentsApi(id),
          ]);
          setAllBlogs(allRes.data || []);
          setComments(commentsRes.data || []);
        } else {
          navigate("/blogs");
        }
      } catch (err) {
        setError("Failed to load blog post.");
        console.log(err + "Failed to fetch blog details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, navigate]);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    alert(saved ? "Removed from saved posts" : "Saved to your reading list");
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) {
      alert("Please enter your name and comment");
      return;
    }
    setCommentSubmitting(true);
    try {
      const res = await addCommentApi(id, {
        name: commentName.trim(),
        email: commentEmail.trim() || null,
        comment: commentText.trim(),
      });
      // Optimistically add the new comment to the list
      const newComment = {
        id: res.id || Date.now(),
        name: commentName,
        email: commentEmail,
        comment: commentText,
        created_at: new Date().toISOString(),
      };
      setComments([newComment, ...comments]);
      setCommentName("");
      setCommentEmail("");
      setCommentText("");
    } catch (err) {
      console.log(err + "Failed to submit comment. Please try again.");
    } finally {
      setCommentSubmitting(false);
    }
  };

  if (loading || (!post && !error)) {
    return (
      <div className="relative min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#0076d8] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="relative min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 font-medium">{error || "Blog not found."}</p>
            <button onClick={() => navigate("/blogs")} className="mt-4 text-[#0076d8] underline text-sm">Back to Blogs</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }

          @keyframes letterReveal {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideInUp {
            animation: slideInUp 0.9s ease forwards;
          }

          .breadcrumb-title span {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: letterReveal 0.5s forwards;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Section */}
        <section
          className="h-[35vh] min-h-[180px] flex flex-col justify-center items-center relative overflow-hidden text-center mt-[80px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,118,216,1) 0%, rgba(0,102,192,1) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <h1 className="font-space-grotesk font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-3 md:mb-6 px-4 relative z-10">
            <div className="breadcrumb-title">
              {BreadcrumbText.map((char, index) => (
                <span
                  key={index}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    marginRight: char === " " ? "0.5em" : "0.1em",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>

          <ul className="inline-flex items-center gap-2 text-white text-sm md:text-base lg:text-lg font-space-grotesk font-medium relative z-10">
            <li className="flex items-center">
              <Link
                to="/"
                className="hover:text-[#ffd801] transition-colors duration-300 hover:scale-105 inline-block"
              >
                Home
              </Link>
            </li>
            <li className="mx-2 text-white/60">
              <span>/</span>
            </li>
            <li className="flex items-center">
              <Link
                to="/blogs"
                className="hover:text-[#ffd801] transition-colors duration-300 hover:scale-105 inline-block"
              >
                Blog
              </Link>
            </li>
            <li className="mx-2 text-white/60">
              <span>/</span>
            </li>
            <li className="flex items-center text-[#ffd801] font-semibold">
              <span className="cursor-default">Blog Details</span>
            </li>
          </ul>

          <div className="absolute top-1/2 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border border-white/10 rounded-full"></div>
        </section>

        {/* Blog Details Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Main Content */}
              <main className="flex-1 min-w-0">
                <button
                  onClick={() => navigate("/blogs")}
                  className="flex items-center gap-2 text-sm text-[#0076d8] font-medium mb-6 hover:gap-3 transition-all"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-xs"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                  </svg>
                  Back to all posts
                </button>

                {/* Featured Image */}
                <div className="relative rounded-xl overflow-hidden mb-6 shadow-md">
                  <img
                    alt={post.title}
                    className="w-full h-64 md:h-96 lg:h-[450px] object-cover"
                    src={post.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"}
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={handleLike}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        liked
                          ? "bg-red-500 text-white"
                          : "bg-black/50 backdrop-blur-sm text-white hover:bg-red-500"
                      }`}
                    >
                      <svg
                        stroke="currentColor"
                        fill={liked ? "currentColor" : "none"}
                        strokeWidth="2"
                        viewBox="0 0 512 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-[#0076d8] transition-all text-white"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={handleSave}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        saved
                          ? "bg-[#0076d8] text-white"
                          : "bg-black/50 backdrop-blur-sm text-white hover:bg-[#0076d8]"
                      }`}
                    >
                      <svg
                        stroke="currentColor"
                        fill={saved ? "currentColor" : "none"}
                        strokeWidth="2"
                        viewBox="0 0 384 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-4 text-gray-500 text-xs md:text-sm">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon />
                    {post.created_at ? new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UserIcon />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon />
                    {post.read_time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-[#0076d8]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>
                    {post.views ?? 0} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    {comments.length} comments
                  </span>
                </div>

                {/* Category Badge */}
                <span className="inline-block bg-[#0076d8]/10 text-[#0076d8] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-6 border-l-4 border-[#0076d8] pl-4 bg-[#0076d8]/5 py-3 rounded-r-lg">
                  {post.description}
                </p>

                {/* Content */}
                <div
                  className="prose prose-sm max-w-none mb-8 text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-700">
                    Tags:
                  </span>
                  {(post.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Comments Section */}
                <div id="comments" className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    <h2 className="text-xl font-bold text-gray-900">
                      Comments ({comments.length})
                    </h2>
                  </div>

                  {/* Comment Form */}
                  <form onSubmit={handleCommentSubmit} className="mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0076d8]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 496 512"
                          className="w-5 h-5 text-[#0076d8]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                        </svg>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            placeholder="Your name *"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]"
                            required
                            type="text"
                            value={commentName}
                            onChange={(e) => setCommentName(e.target.value)}
                          />
                          <input
                            placeholder="Your email (optional)"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8]"
                            type="email"
                            value={commentEmail}
                            onChange={(e) => setCommentEmail(e.target.value)}
                          />
                        </div>
                        <textarea
                          placeholder="Write your comment..."
                          rows="3"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0076d8] resize-none"
                          required
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        ></textarea>
                        <button
                          type="submit"
                          disabled={commentSubmitting}
                          className="flex items-center gap-2 px-5 py-2 bg-[#0076d8] text-white text-sm rounded-lg hover:bg-[#005db0] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {commentSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Posting...</>
                          ) : "Post Comment"}
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Comments List */}
                  {comments.length > 0 ? (
                    <div className="space-y-5">
                      {comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-gray-50 rounded-xl p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#0076d8]/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-[#0076d8] font-bold text-sm">
                                {comment.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900 text-sm">
                                  {comment.name}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {comment.created_at ? new Date(comment.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm">
                                {comment.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 bg-gray-50 rounded-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="w-14 h-14 text-gray-300 mx-auto mb-3"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                      </svg>
                      <p className="text-gray-500 text-sm">
                        No comments yet. Be the first to comment!
                      </p>
                    </div>
                  )}
                </div>
              </main>

              {/* Sidebar */}
              <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-6">
                {/* Author Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      alt={post.author}
                      className="w-14 h-14 rounded-full border-2 border-[#0076d8]/30"
                      src={`https://ui-avatars.com/api/?background=0076d8&color=fff&name=${encodeURIComponent(
                        post.author
                      )}&size=60&font-size=0.35`}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-base">
                        {post.author}
                      </h4>
                      <p className="text-xs text-[#0076d8]">
                        Tech Writer &amp; IT Consultant
                      </p>
                      <div className="flex gap-2 mt-1.5">
                        <a
                          href="#"
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0076d8] hover:text-white transition text-xs"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-xs"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0076d8] hover:text-white transition text-xs"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="text-xs"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Passionate about cloud computing, AI, and digital
                    transformation. Helping businesses leverage technology for
                    growth.
                  </p>
                </div>

                {/* Engagement Buttons */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        liked
                          ? "bg-red-50 text-red-500"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <svg
                        stroke="currentColor"
                        fill={liked ? "currentColor" : "none"}
                        strokeWidth="2"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3z"></path>
                      </svg>
                      <span className="text-sm font-medium">{likes}</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
                      </svg>
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button
                      onClick={handleSave}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        saved
                          ? "bg-[#0076d8]/10 text-[#0076d8]"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <svg
                        stroke="currentColor"
                        fill={saved ? "currentColor" : "none"}
                        strokeWidth="2"
                        viewBox="0 0 384 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                      </svg>
                      <span className="text-sm font-medium">
                        {saved ? "Saved" : "Save"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Recent Comments Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    Recent Comments
                  </h3>
                  {comments.length > 0 ? (
                    <div className="space-y-3">
                      {comments.slice(0, 3).map((comment) => (
                        <div key={comment.id} className="border-b border-gray-100 pb-2 last:border-0">
                          <p className="text-xs font-semibold text-gray-800">
                            {comment.name}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {comment.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 text-center py-3">
                      No comments yet
                    </p>
                  )}
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/blogs?category=Business & Strategy"
                      className="text-xs text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-[#0076d8] hover:text-white transition"
                    >
                      Business &amp; Strategy
                    </Link>
                    <Link
                      to="/blogs?category=Technology"
                      className="text-xs text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-[#0076d8] hover:text-white transition"
                    >
                      Technology
                    </Link>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Recent Posts
                  </h3>
                  <div className="space-y-3">
                    {allBlogs
                      .filter((p) => p.id !== post.id)
                      .slice(0, 2)
                      .map((recentPost) => (
                        <div
                          key={recentPost.id}
                          onClick={() => navigate(`/blogs/${recentPost.id}`)}
                          className="group cursor-pointer bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <div className="flex gap-3">
                            <img
                              alt={recentPost.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                              src={recentPost.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80"}
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] text-[#0076d8] font-medium">
                                {recentPost.category}
                              </span>
                              <p className="text-xs font-semibold text-gray-800 group-hover:text-[#0076d8] transition line-clamp-2 mt-0.5">
                                {recentPost.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[9px] text-gray-400 flex items-center gap-0.5">
                                  <CalendarIcon />
                                  {recentPost.created_at ? new Date(recentPost.created_at).toLocaleDateString() : ""}
                                </span>
                                <span className="text-[9px] text-gray-400 flex items-center gap-0.5">
                                  <ClockIcon />
                                  {recentPost.read_time}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      Cloud
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      AI
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      Security
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      ITSM
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      DevOps
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      CI/CD
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      Analytics
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full hover:bg-[#0076d8] hover:text-white transition cursor-pointer">
                      Migration
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden max-w-[1820px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>

          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="flex flex-wrap justify-between -mx-3">
                <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0 animate-slideInUp">
                  <div className="max-w-[283px]">
                    <div className="flex items-center mb-8">
                      <div className="flex items-center">
                        <img
                          alt="Hously Logo"
                          className="h-[100px] w-auto transform hover:scale-105 transition-transform duration-300"
                          src={logo}
                        />
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8">
                      Leading provider of comprehensive IT solutions including
                      web development, AI integration, cloud services, and
                      digital transformation for businesses worldwide.
                    </p>

                    <div className="flex gap-3">
                      <FooterSocial href="https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr">
                        {socialIcons.facebook}
                      </FooterSocial>
                      <FooterSocial href="https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==">
                        {socialIcons.instagram}
                      </FooterSocial>
                      <FooterSocial href="https://www.linkedin.com/company/houlsy-finntech-realty/">
                        {socialIcons.linkedin}
                      </FooterSocial>
                      <FooterSocial href="#">{socialIcons.twitter}</FooterSocial>
                      <FooterSocial href="#">{socialIcons.youtube}</FooterSocial>
                    </div>
                  </div>
                </div>

                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "270ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Useful Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "540ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        About Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Our Team
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Press &amp; Media
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Investor Relations
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp"
                  style={{ animationDelay: "810ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        AI &amp; Chatbot Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Cloud &amp; DevOps
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        Software Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        IT Consulting
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="w-full md:w-auto px-3 animate-slideInUp"
                  style={{ animationDelay: "1080ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Contact Us
                  </h3>

                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 384 512"
                        className="text-[#fed700] mt-1 flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                      <p className="text-gray-300">
                        First Floor,Tamara Uprise Rahatni,
                        <br />
                        Pune, 411017
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                      <a
                        href="tel:+919371009381"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        +91 9371 00 9381
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                      <a
                        href="mailto:careers@hously.in"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        careers@hously.in
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm">
                      Subscribe to our newsletter
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        placeholder="Enter your email"
                        className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        type="email"
                      />
                      <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-sm text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-900">
          <div className="px-3 py-4">
            <div className="mb-5 text-center">
              <div className="flex items-center mb-2 justify-start">
                <div className="flex items-center">
                  <img
                    alt="Hously Logo final"
                    className="h-[92px] w-auto transform hover:scale-105 transition-transform duration-300"
                    src={logo}
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-2 text-left">
                Leading provider of comprehensive IT solutions including web
                development, AI integration, cloud services, and digital
                transformation.
              </p>

              <div className="flex justify-start gap-3 mb-2">
                <FooterSocial
                  mobile
                  href="https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr"
                >
                  {socialIcons.facebook}
                </FooterSocial>
                <FooterSocial
                  mobile
                  href="https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg=="
                >
                  {socialIcons.instagram}
                </FooterSocial>
                <FooterSocial
                  mobile
                  href="https://www.linkedin.com/company/houlsy-finntech-realty/"
                >
                  {socialIcons.linkedin}
                </FooterSocial>
                <FooterSocial mobile href="#">
                  {socialIcons.twitter}
                </FooterSocial>
                <FooterSocial mobile href="#">
                  {socialIcons.youtube}
                </FooterSocial>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      About Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      AI &amp; Chatbot
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Cloud &amp; DevOps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      IT Consulting
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      className="text-[#0076d8] mt-1 text-xs flex-shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <p className="text-gray-300 text-xs">
                      First Floor,Tamara Uprise,
                      <br />
                      Pune, 411017
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] flex-shrink-0 text-sm"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                    <a
                      href="tel:+919371009381"
                      className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs"
                    >
                      +91 9371 00 9381
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] text-xs flex-shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                    <a
                      href="mailto:careers@hously.in"
                      className="text-gray-300 hover:text-white text-xs"
                    >
                      careers@hously.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg font-bold mb-4">
                Subscribe to our Newsletter
              </h3>
              <div className="flex items-center gap-2">
                <input
                  placeholder="Enter your email"
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-full px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                  type="email"
                />
                <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-sm text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 py-4">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center sm:justify-between">
          <p className="text-gray-400 text-xs sm:text-sm text-left pl-2">
            © 2026 <span>Hously Finntech Realty</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm pr-2">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition"
            >
              Terms of Service
            </a>
            <a
              href="/cookie-policy"
              className="text-gray-400 hover:text-white transition"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogsDetails;