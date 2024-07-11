import  { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      className="focus:outline-none pt-[2px]"
    >
      {liked ? (
        <svg
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 transition transform duration-200 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.172 3.172a4.008 4.008 0 015.656 0L12 6.343l3.172-3.171a4.008 4.008 0 015.656 5.656L12 18.657l-8.828-8.828a4.008 4.008 0 010-5.657z"
          />
        </svg>
      ) : (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 transition transform duration-200 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.172 3.172a4.008 4.008 0 015.656 0L12 6.343l3.172-3.171a4.008 4.008 0 015.656 5.656L12 18.657l-8.828-8.828a4.008 4.008 0 010-5.657z"
          />
        </svg>
      )}
    </button>
  );
};

export default LikeButton;
