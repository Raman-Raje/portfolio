'use client';

import { useState } from 'react';
import styles from '@/styles/components/blog/Comments.module.css';

const Comments = () => {
  const [comment, setComment] = useState({ name: '', email: '', message: '' });
  const [showMore, setShowMore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.name && comment.email && comment.message) {
      alert("Thank you for your comment! It will be reviewed and published soon.");
      setComment({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const sampleComments = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      time: "2 hours ago",
      message: "Great article, Alex! I've been experimenting with Solid.js recently and the performance improvements are incredible. The fine-grained reactivity really makes a difference in complex applications.",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)"
    },
    {
      id: 2,
      name: "Mike Kumar", 
      initials: "MK",
      time: "5 hours ago",
      message: "The section on AI-powered development really resonates with me. We've integrated GitHub Copilot into our workflow and it's amazing how much it speeds up development, especially for repetitive tasks.",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      initials: "ER", 
      time: "1 day ago",
      message: "Thanks for highlighting accessibility! It's so important that we're finally seeing it become a standard part of the development process rather than an afterthought. The automated testing examples are really helpful.",
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)"
    }
  ];

  const visibleComments = showMore ? sampleComments : sampleComments.slice(0, 2);

  return (
    <section className={styles.commentsSection}>
      <h3 className={styles.commentsTitle}>💬 Comments ({sampleComments.length})</h3>
      
      {/* Comment Form */}
      <div className={styles.commentForm}>
        <h4 className={styles.formTitle}>Leave a comment</h4>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Your name"
              value={comment.name}
              onChange={(e) => setComment({ ...comment, name: e.target.value })}
              className={styles.formInput}
            />
            <input
              type="email"
              placeholder="Your email"
              value={comment.email}
              onChange={(e) => setComment({ ...comment, email: e.target.value })}
              className={styles.formInput}
            />
          </div>
          <textarea
            placeholder="Your comment..."
            rows="4"
            value={comment.message}
            onChange={(e) => setComment({ ...comment, message: e.target.value })}
            className={styles.formTextarea}
          />
          <button type="submit" className={styles.submitBtn}>Post Comment</button>
        </form>
      </div>

      {/* Comments List */}
      <div className={styles.commentsList}>
        {visibleComments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            <div className={styles.commentHeader}>
              <div 
                className={styles.commentAvatar}
                style={{ background: comment.gradient }}
              >
                {comment.initials}
              </div>
              <div>
                <div className={styles.commentName}>{comment.name}</div>
                <div className={styles.commentTime}>{comment.time}</div>
              </div>
            </div>
            <p className={styles.commentMessage}>{comment.message}</p>
          </div>
        ))}
      </div>

      {sampleComments.length > 2 && (
        <div className={styles.loadMore}>
          <button 
            onClick={() => setShowMore(!showMore)}
            className={styles.loadMoreBtn}
          >
            {showMore ? 'Show Less Comments' : 'Load More Comments'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Comments;