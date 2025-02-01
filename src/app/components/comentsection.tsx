"use client";
import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      username: "carEnthusiast99",
      verified: true,
      upvotes: 128,
      time: "3d",
      text: "Fantastic car! Congrats to the buyer and seller!",
      replies: 2,
    },
    {
      username: "AutoGuru",
      verified: true,
      upvotes: 453,
      time: "4d",
      text: "This is a rare find. Well done!",
      replies: 1,
    },
    {
      username: "Leviathan",
      verified: false,
      upvotes: 3300,
      time: "5d",
      text: "Incredible! Can't wait to see it on the road.",
      replies: 1,
    },
    {
      username: "BlackdogPerformanceCars",
      verified: true,
      badge: "Bidder",
      upvotes: 700,
      time: "4d",
      text: "Such a great deal on this beauty!",
      replies: 0,
    },
    {
      username: "fastlane22",
      verified: true,
      upvotes: 52,
      time: "2d",
      text: "Amazing! Definitely worth the price.",
      replies: 0,
    },
    {
      username: "motorhead123",
      verified: false,
      upvotes: 145,
      time: "6d",
      text: "Congratulations to both parties! Great sale.",
      replies: 3,
    },
    {
      username: "gearJunkie",
      verified: true,
      upvotes: 87,
      time: "1d",
      text: "Wish I had bid on this one. Stunning car!",
      replies: 1,
    },
    {
      username: "raceFanatic",
      verified: false,
      upvotes: 99,
      time: "7d",
      text: "Well-deserved price for such a masterpiece.",
      replies: 0,
    },
    {
      username: "DriftKing",
      verified: true,
      upvotes: 523,
      time: "4d",
      text: "This car is an absolute beast! Congrats to the lucky owner!",
      replies: 2,
    },
    {
      username: "classicRides",
      verified: false,
      upvotes: 214,
      time: "8d",
      text: "What a great auction. Well done!",
      replies: 0,
    },
    {
      username: "speedster",
      verified: true,
      upvotes: 67,
      time: "5d",
      text: "Gorgeous ride. Glad to see it go to a good home.",
      replies: 1,
    },
    {
      username: "PorscheLover",
      verified: true,
      upvotes: 412,
      time: "6d",
      text: "This is the one I've been looking for. Amazing!",
      replies: 2,
    },
    {
      username: "vintageWheels",
      verified: false,
      upvotes: 128,
      time: "2d",
      text: "The photos do not do this car justice. Great deal!",
      replies: 0,
    },
    {
      username: "roadsterGuy",
      verified: false,
      upvotes: 300,
      time: "5d",
      text: "Well done to the buyer. This is a gem!",
      replies: 1,
    },
    {
      username: "TurboFan",
      verified: true,
      upvotes: 700,
      time: "3d",
      text: "What an exciting auction to follow. Congratulations!",
      replies: 3,
    },
    {
      username: "carCollector",
      verified: true,
      upvotes: 345,
      time: "4d",
      text: "A true collector's car. Worth every penny!",
      replies: 1,
    },
    {
      username: "garageKing",
      verified: false,
      upvotes: 192,
      time: "7d",
      text: "Lucky buyer. Enjoy the drive!",
      replies: 0,
    },
    {
      username: "bidWarrior",
      verified: true,
      upvotes: 56,
      time: "1d",
      text: "Loved the bidding war on this one. Great outcome!",
      replies: 2,
    },
    {
      username: "roadMaster",
      verified: false,
      upvotes: 220,
      time: "5d",
      text: "Absolutely stunning car. Can't wait to see more auctions like this!",
      replies: 0,
    },
    {
      username: "highRev",
      verified: true,
      upvotes: 103,
      time: "2d",
      text: "One of the best cars I've seen this year. Great work, seller!",
      replies: 1,
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentData = {
      username: "NewUser",
      verified: false,
      upvotes: 0,
      time: "Just now",
      text: newComment,
      replies: 0,
      badge: undefined,
    };

    setComments([newCommentData, ...comments]);
    setNewComment("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments & Bids</h2>

      {/* Add Comment Section */}
      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col"
          >
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                {comment.username.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <span className="font-bold text-gray-800">
                  {comment.username}
                </span>
                <span className="text-gray-500 text-xs ml-2">
                  {comment.time}
                </span>
              </div>
            </div>

            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
