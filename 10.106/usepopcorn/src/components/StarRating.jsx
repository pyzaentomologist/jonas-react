import React, { useState } from "react";


export function StarRating(props) {
  const { maxRating = 5, color = "#fcc419", size = 48, className = "", messages = [], defaultRating = 0, onSetRating = () => {return true} } = props;
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(defaultRating);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    starContainer: {
      display: "flex",
      gap: "4px",
    },
    text: {
      lineHeight: "1",
      margin: "0",
      color: color,
    },
    star: {
      display: "block",
      width: `${size}px`,
      height: `${size}px`,
      cursor: "pointer",
      color: color,
    },
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  function handleTempRating(rating) {
    setTempRating(rating);
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.starContainer} className={className}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={crypto.randomUUID()}
              onRate={() => handleRating(i + 1)}
              onHoverIn={() => handleTempRating(i + 1)}
              onHoverOut={() => handleTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              styles={styles.star}
            />
          ))}
        </div>
        <p style={styles.text}>
          {messages.length > 0 ? (messages[ tempRating ? tempRating - 1 : rating - 1]) : (tempRating || rating || "")}
        </p>
      </div>
    </>
  );
}


function Star(props) {
  const { onRate, full, onHoverIn, onHoverOut, styles } = props;
  return (
    <span
      style={styles}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={styles.color}
          stroke={styles.color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={styles.color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}