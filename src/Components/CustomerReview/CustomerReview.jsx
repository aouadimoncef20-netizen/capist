import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiX, FiCheck, FiStar } from 'react-icons/fi';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

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
    <section className="py-section-mobile lg:py-section bg-surface-primary overflow-hidden relative">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
        {/* Decorative background elements */}
        <div
          className="absolute rounded-full pointer-events-none opacity-[0.04] bg-brand-green hidden lg:block"
          style={{ width: 300, height: 300, top: -80, right: -80 }}
        />
        <div
          className="absolute rounded-full pointer-events-none opacity-[0.04] bg-brand-green hidden lg:block"
          style={{ width: 180, height: 180, bottom: 60, left: -40 }}
        />
        <div
          className="absolute pointer-events-none opacity-[0.06] text-xs text-brand-green font-bold hidden lg:block"
          style={{ top: 120, right: 60, letterSpacing: 12, lineHeight: '12px' }}
        >
          {'• • • • •\n• • • • •\n• • • • •'}
        </div>

        <SectionTitle
          eyebrow="CUSTOMER VOICES"
          title="WHAT OUR COMMUNITY SAYS"
          align="center"
        />

        {/* ===== Submit Review Button / Form ===== */}
        <motion.div
          className="bg-surface-secondary p-7 lg:p-12 border border-border-light mb-12 lg:mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Green accent bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-green" />

          <h3 className="font-display text-headline-sm mb-1">Share Your Experience</h3>
          <p className="text-text-muted text-body-sm mb-6 lg:mb-8">
            Tell us what you think about your CAPIST cap. Upload photos, leave a review.
          </p>

          {!formOpen ? (
            <motion.div whileHover={{ scale: 1.01 }}>
              <Button variant="secondary" size="md" onClick={() => setFormOpen(true)}>
                <FiStar style={{ marginRight: 6 }} />
                Write a Review
              </Button>
            </motion.div>
          ) : (
            <motion.form
              className="flex flex-col gap-4 lg:gap-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-5">
                <div className="flex flex-col">
                  <label className="text-label font-label tracking-widest uppercase text-text-muted mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex M."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-border-light p-3.5 lg:p-4 bg-white text-body-md text-text-primary outline-none transition-colors focus:border-brand-green focus:ring-1 focus:ring-brand-green font-body"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-label font-label tracking-widest uppercase text-text-muted mb-1.5">
                    Rating
                  </label>
                  <div className="flex gap-2 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                        className="text-[32px] text-border-medium bg-none border-none cursor-pointer transition-all leading-none p-1 min-h-[44px] min-w-[44px]"
                        data-filled={star <= (hoverRating || rating) ? '' : undefined}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-label font-label tracking-widest uppercase text-text-muted mb-1.5">
                  Your Review
                </label>
                <textarea
                  placeholder="What did you love about your cap? Share details about fit, fabric, and style..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  rows={4}
                  className="border border-border-light p-3.5 lg:p-4 bg-white text-body-md text-text-primary outline-none transition-colors focus:border-brand-green focus:ring-1 focus:ring-brand-green font-body resize-y min-h-[100px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-label font-label tracking-widest uppercase text-text-muted mb-1.5">
                  Add Photos (optional)
                </label>
                <div
                  className="border-2 border-dashed border-border-light p-6 lg:p-8 text-center cursor-pointer transition-colors active:border-brand-green active:bg-brand-green/5"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FiCamera className="text-[28px] lg:text-[32px] text-text-muted mb-2" />
                  <p className="text-body-sm text-text-muted">
                    Paste an image URL below or click to browse
                  </p>
                  <span className="text-label text-brand-green font-label tracking-widest uppercase block mt-1">
                    Add Photos
                  </span>
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
                    className="flex-1 border border-border-light p-[10px_12px] text-body-sm outline-none font-body"
                  />
                  <Button variant="ghost" size="sm" type="button" onClick={handleAddImage}>
                    Add
                  </Button>
                </div>

                {imageUrls.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 mt-3">
                    {imageUrls.map((url, idx) => (
                      <div
                        key={idx}
                        className="relative w-[72px] h-[72px] border border-border-light overflow-hidden"
                      >
                        <img
                          src={url}
                          alt={`Review attachment ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-0.5 right-0.5 w-[22px] h-[22px] bg-black/60 border-0 text-white text-[11px] flex items-center justify-center cursor-pointer rounded-full"
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col-reverse lg:flex-row lg:justify-end lg:items-center gap-3 lg:gap-4 pt-2">
                <AnimatePresence>
                  {submitted && (
                    <motion.span
                      className="flex items-center gap-2 text-brand-green text-body-sm font-medium justify-center lg:justify-start"
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
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-gutter-mobile lg:gap-gutter mb-8 lg:mb-12">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  className="bg-white border border-border-light p-6 lg:p-7 transition-all active:translate-y-[-2px] active:shadow-md lg:hover:translate-y-[-4px] lg:hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center font-bold text-[15px] lg:text-base text-white flex-shrink-0"
                      style={{
                        background: AVATAR_COLORS[idx % AVATAR_COLORS.length],
                      }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-body-sm font-semibold">{review.name}</p>
                      <p className="text-label text-text-muted">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        fill={i < review.rating ? '#f5a623' : 'none'}
                        color={i < review.rating ? '#f5a623' : 'var(--border-medium)'}
                      />
                    ))}
                  </div>

                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    {review.text}
                  </p>

                  {review.images && review.images.length > 0 && (
                    <motion.div
                      className="flex gap-2 mt-3 flex-wrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {review.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Review by ${review.name}`}
                          className="w-16 h-16 lg:w-[72px] lg:h-[72px] object-cover border border-border-light"
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {visibleCount < reviews.length && (
              <motion.div
                className="text-center"
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
