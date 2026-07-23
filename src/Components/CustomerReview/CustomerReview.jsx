import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiX, FiCheck, FiStar } from 'react-icons/fi';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './CustomerReview.module.css';

const AVATAR_COLORS = ['#2E8B57', '#111111', '#555f6f', '#97344a', '#b64c62', '#15803d'];

const CustomerReview = ({ reviews = [], onReviewSubmit }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [imageInput, setImageInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const fileInputRef = useRef(null);

  const handleAddImage = useCallback(() => {
    const url = imageInput.trim();
    if (url && /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i.test(url)) {
      setImageUrls((prev) => [...prev, url]);
      setImageInput('');
    }
  }, [imageInput]);

  const handleRemoveImage = useCallback((index) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      images: imageUrls,
    };

    if (onReviewSubmit) onReviewSubmit(newReview);

    setName('');
    setRating(0);
    setText('');
    setImageUrls([]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Decorative background elements */}
        <div className={styles.decorCircle} style={{ width: 300, height: 300, top: -80, right: -80 }} />
        <div className={styles.decorCircle} style={{ width: 180, height: 180, bottom: 60, left: -40 }} />
        <div className={styles.decorDots} style={{ top: 120, right: 60 }}>
          {'• • • • •\n• • • • •\n• • • • •'}
        </div>

        <SectionTitle
          eyebrow="CUSTOMER VOICES"
          title="WHAT OUR COMMUNITY SAYS"
          align="center"
        />

        {/* ===== Submit Review Button / Form ===== */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Share Your Experience</h3>
          <p>Tell us what you think about your CAPIST cap. Upload photos, leave a review.</p>

          {!formOpen ? (
            <motion.div whileHover={{ scale: 1.01 }}>
              <Button variant="secondary" size="md" onClick={() => setFormOpen(true)}>
                <FiStar style={{ marginRight: 6 }} />
                Write a Review
              </Button>
            </motion.div>
          ) : (
            <motion.form
              className={styles.form}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex M."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Rating</label>
                  <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`${styles.starBtn} ${star <= (hoverRating || rating) ? styles.filled : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label>Your Review</label>
                <textarea
                  placeholder="What did you love about your cap? Share details about fit, fabric, and style..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Add Photos (optional)</label>
                <div
                  className={styles.imageUpload}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FiCamera className={styles.imageUploadIcon} />
                  <p>Paste an image URL below or click to browse</p>
                  <span>Add Photos</span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    files.forEach((file) => {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        setImageUrls((prev) => [...prev, ev.target.result]);
                      };
                      reader.readAsDataURL(file);
                    });
                  }}
                />
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <input
                    type="text"
                    placeholder="Or paste image URL..."
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddImage())}
                    style={{
                      flex: 1,
                      border: '1px solid var(--border-light)',
                      padding: '10px 12px',
                      fontSize: 'var(--fs-body-sm)',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                  <Button variant="ghost" size="sm" type="button" onClick={handleAddImage}>
                    Add
                  </Button>
                </div>

                {imageUrls.length > 0 && (
                  <div className={styles.imagePreview}>
                    {imageUrls.map((url, idx) => (
                      <div key={idx} className={styles.imagePreviewItem}>
                        <img src={url} alt={`Review image ${idx + 1}`} />
                        <button type="button" onClick={() => handleRemoveImage(idx)}>
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.submitRow}>
                <AnimatePresence>
                  {submitted && (
                    <motion.span
                      className={styles.successMsg}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiCheck /> Review submitted! Thank you.
                    </motion.span>
                  )}
                </AnimatePresence>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button variant="ghost" size="sm" type="button" onClick={() => setFormOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="green" size="sm" type="submit">
                    Submit Review
                  </Button>
                </div>
              </div>
            </motion.form>
          )}
        </motion.div>

        {/* ===== Reviews Display ===== */}
        {visibleReviews.length > 0 && (
          <>
            <div className={styles.reviewsGrid}>
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  className={styles.reviewCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.reviewHeader}>
                    <div
                      className={styles.reviewAvatar}
                      style={{
                        background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                      }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className={styles.reviewName}>{review.name}</p>
                      <p className={styles.reviewDate}>{review.date}</p>
                    </div>
                  </div>

                  <div className={styles.reviewStars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        fill={i < review.rating ? '#f5a623' : 'none'}
                        color={i < review.rating ? '#f5a623' : 'var(--border-medium)'}
                      />
                    ))}
                  </div>

                  <p className={styles.reviewText}>{review.text}</p>

                  {review.images && review.images.length > 0 && (
                    <motion.div
                      className={styles.reviewImages}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {review.images.map((img, i) => (
                        <img key={i} src={img} alt={`Review photo ${i + 1}`} />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {visibleCount < reviews.length && (
              <motion.div
                className={styles.loadMore}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                  Load More Reviews
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CustomerReview;
