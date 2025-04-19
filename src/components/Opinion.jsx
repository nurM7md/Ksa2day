import React, { useState } from "react";

const Opinion = () => {
  const [votes, setVotes] = useState({
    ممتاز: 0,
    جيد: 0,
    مقبول: 0
  });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1
    }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const getPercentage = (option) => {
    if (totalVotes === 0) return 0;
    return ((votes[option] / totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="bg-white text-red-900 p-6 rounded-xl shadow-lg h-full">
      <h3 className="text-xl font-bold mb-6 text-center">ما رأيك في الموقع؟</h3>
      {["ممتاز", "جيد", "مقبول"].map((option) => (
        <div key={option} className="mb-6">
          <button
            onClick={() => handleVote(option)}
            className="px-5 py-2 bg-red-800 text-white rounded-full hover:bg-red-900 transition"
          >
            {option}
          </button>
          <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-700 transition-all duration-500"
              style={{ width: `${getPercentage(option)}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-center">{getPercentage(option)}%</p>
        </div>
      ))}
    </div>
  );
};

export default Opinion;

