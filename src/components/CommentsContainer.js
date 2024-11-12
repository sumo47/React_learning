import React, { useState } from "react";

const commentsData = [
  {
    name: "Sumit Kumar",
    comment: "This is a great app!",
    replies: [
      { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
      {
        name: "Sumit Kumar",
        comment: "This is a great app!",
        replies: [
          {
            name: "Sumit Kumar",
            comment: "This is a great app!",
            replies: [
              {
                name: "Sumit Kumar",
                comment: "This is a great app!",
                replies: [
                  {
                    name: "Sumit Kumar",
                    comment: "This is a great app!",
                    replies: [],
                  },
                  {
                    name: "Sumit Kumar",
                    comment: "This is a great app!",
                    replies: [
                      {
                        name: "Sumit Kumar",
                        comment: "This is a great app!",
                        replies: [],
                      },
                      {
                        name: "Sumit Kumar",
                        comment: "This is a great app!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
    ],
  },
  { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
  { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
  { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
  { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
  { name: "Sumit Kumar", comment: "This is a great app!", replies: [] },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="flex gap-3 items-start mb-4">
      {/* User Avatar */}
      <img
        className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer rounded-full"
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="user"
      />

      {/* Comment Content */}
      <div className="bg-gray-200 p-3 rounded-md shadow-sm w-full">
        {/* Name and Comment */}
        <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">
          {name}
        </p>
        <p className="text-gray-700 text-xs sm:text-sm mb-2">{comment}</p>

        {/* Toggle Replies Button */}
        {replies && replies.length > 0 && (
          <button
            onClick={toggleReplies}
            className="text-blue-500 text-xs sm:text-sm font-medium mt-2"
          >
            {showReplies ? "Hide Replies" : `Show Replies (${replies.length})`}
          </button>
        )}

        {/* Replies Section (Collapsible) */}
        {showReplies && replies && replies.length > 0 && (
          <div className="ml-6 mt-2 border-l-2 border-gray-200 pl-3">
            {replies.map((reply) => (
              <Comment key={reply.name} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments: </h1>
      {commentsData.map((comment) => (
        <Comment key={comment.name} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
