import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const GALLERY_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaC1zMuSUjBHOMv_sSsBkDgokQIIA-NDMhPaw3IGe1m18Ucfko7_D9kcMQRAjirgxla7tRzbpPoEsV9VlgfHyWbkwMpVnVzqUKB4nuZB3Ig1TzNu9Trwr-kFvb1-Z0sadaN9qzWcblPz4zz919QevyavPb7ruoYUYDAB_Db-M_vtT8k3RD5cZtdh2sPq24Ool6NND4k4M0AKt3JXwTvLhRw6IbBINo9tS4-w929SVkzeaZm5e6mfXtyQ',
    alt: 'City rooftop at sunset',
    span: 'tall',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF4bfFdTu_bXkIWi0ndtXEcO0AL6PRNtYUUIsQk_RhTxzOnN8vghqA3lQFZBIEtRJevtuGDPVNqH5IWnvpRhdXee8s8zjATmbI3oacvW8HzfdapN1nfkr7z4NEXNl1LUE4LwoJ0phAWoJJpijhQqP-b2b2N6xUlhkNmDoCyI_z4Nl0dt7diwrf35SSGWP-sChwPnAKNz4hbrcJUK2UTyNhsU_L5IBvypP-yBXcEmC4Xv4DM3J9h9Q_yg',
    alt: 'Parisian cafe style',
    span: 'wide',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAL6nUs4LAlp-JHq8WzhcFbdXATFYkYm3y4p_U7FnPhKpv_BkFt_tuuhAZezvyH9yyi4V-XXHGKXWoqcJIIxNyS0HC8bRlZNqT145gVixZ0Crum-uWl2IcD6JbfauyyDpZ9964ZRD0ZTOtXmwxkuCVH3JhjMQo7EqmELcRhzCugGd0DyWLKrfIVNB5-OT6cwRBDKtYPNobXL9xoyPWs-sCygEr6Q26qJQZy2D0e3aS3WSoaSRzZbop6Q',
    alt: 'Architectural black and white',
    span: 'tall',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc0Oiar9gq2ZM6cbUiVXClxe_RE6MAnZmhwE0GlaqFYXsLbIm75MNOLEh1kkHKGMB6FHycfOvmMBLGb-azXNRkbskkQg04Gn-Y7PfRjdP3pXoLM2b6YUDzGqv46MVTPlHmw4lvnWTStZqmJHUAutGD24g9F9VVkkCOueFCTpCfIZ_hKDmbMetWfsAtnUc08sehkGPQkaMVlJmO_SuJU9gZXMV5asxIUn4PAYSxBM6hd4lWExD4nedi-g',
    alt: 'Subway station urban',
    span: 'tall',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUxmp4hQvsGTp6_Tn4M78nIq35fhbIZDVgMoJHHm3Jv54Bz84-BEAfPKVYv4nLhePdijfoYKQ9Y3DZ40g088DcVQYvoo2qiTINFHR_zPNki-Vjp6BwVkZ2lcAv05hKnEAQhx1xoAVxw6XEZr5vkUIc1PMeSttx1UU2xFps5U-eMzp0kgZviNH2AGxTzOmZaXHKTlciQpWr_snhCs-nNkgC2BdHc-YXSE3mubXEBVg0ls7QJM7gY21Qg',
    alt: 'Travel essentials flat lay',
    span: 'wide',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQud-JQhu8owbn32kP89YU21QpjTq1lMCXBtgZB_zN5FTPhUlt5SEX590y4_DBSNMhxaafhqJXXd-VltdRLWEQHDgyRJa_3SGP_F9Bhj0xYWbbVUre-oFVMJZvOahKfVUNHY4LmPsjRH51UGkPLXcRNOWfDa2s1GoqBVDU2xi90DiMxkcAHCk5N3Z7LzVwH7R1d5OmQZ8KL7I1FLQ-aZXvsCTMPUfBqYYgem2lBRGkCntS-cE76ihV8g',
    alt: 'Art gallery silhouette',
    span: 'tall',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lhFChkBW3OOdi942PORLHo8HLgkQec_Xt0LMYidb-rCDOlIEWlmlC5H0SVLOoK5spo8sHzDV0rsaoptlT0i3ig2gEf2D8-vNJW8Z8-wNEU-I8foXRg9siwKhdeLUJYtTvn2M_ZzieX9Lu3UGwtElUKkayOM6_RvErkicGlzFESJg6H9MWu--7LFN-sigBl8ycKrfSgu8xSFdFm0q-XCkl4kz_-DNPuuIWrfE1iTRp-fCUGX3U-SlZg',
    alt: 'Modern classic editorial',
    span: 'wide',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3E6RemYs_esoDTx3v33pBxsJ6U_qxkmGGrekD7XRww4GMH6KFV_g_XXyYdwCE_3Tr6XYobF0PT8OdGO_Rjcv6a7ze9hoVxwV3AVfNAFQu29iB3ZAizFYAazrzpk5aUVtNj-ksxnn0Ggzby7amqbObrDTts4n3ghfQwcw_f75sE709XCCquuBLc_TFrAQ2ulfh7xoHaIHRnZETIxPkes-hLrL2ox0PjAtnibgHonuJsLSrAjd_Mcodxg',
    alt: 'Elevated street style',
    span: 'tall',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida/AP1WRLtUlrQpKlMC8YnjupRmQatdfEQDhUnsllN_ue2PMEaoueP1v4YDukmK3P-YsVMBMR2wzSNz2nELnF6Z3jkyOj9aXzoqIIz7BhkazO4X4dEz5qUnKLzZ-9WZQBLNeJX_BHWbB1Q9znukOkr7KzH8QNqEaWj2qgEugas4t7f3DM5QAMjAoHpYP14u8kqCP_7_zilIv9Arqri-31wMOLMHjACobwnbykgl2CgZSh_AI069FU0RiHOSzzjodYoI',
    alt: 'Luxury signature cap',
    span: 'wide',
  },
];

const Lookbook = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeModal, goNext, goPrev]);

  // Touch swipe
  let touchStart = 0;
  const handleTouchStart = (e) => { touchStart = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div className="py-12 lg:py-24 pb-20 lg:pb-[120px]">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin-desktop">
        <SectionTitle
          eyebrow="VISUAL NARRATIVE"
          title="THE LOOKBOOK"
          align="center"
        />

        <motion.div
          className="columns-2 lg:columns-2 xl:columns-3 gap-2 lg:gap-3 xl:gap-4 mt-8 lg:mt-12 xl:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-2 lg:mb-3 xl:mb-4 relative overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openModal(index)}
            >
              <LazyLoadImage
                src={img.src}
                alt={img.alt}
                effect="opacity"
                className="w-full h-auto block transition-transform duration-700 active:scale-105 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <FiMaximize2 className="text-white text-[28px] lg:text-[32px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="relative max-w-[100vw] max-h-[100vh] flex items-center justify-center px-3 py-[60px] lg:p-0 lg:max-w-[90vw] lg:max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 lg:top-6 lg:right-6 w-11 h-11 lg:w-12 lg:h-12 bg-white/10 flex items-center justify-center text-white text-[22px] lg:text-2xl cursor-pointer transition-colors z-10 active:bg-white/20 lg:hover:bg-white/20 border-none"
                onClick={closeModal}
              >
                <FiX />
              </button>

              <button
                className="absolute top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 bg-white/10 flex items-center justify-center text-white text-[22px] lg:text-2xl cursor-pointer transition-colors z-10 active:bg-white/20 lg:hover:bg-white/20 border-none left-2 lg:left-6"
                onClick={goPrev}
              >
                <FiChevronLeft />
              </button>

              <img
                src={GALLERY_IMAGES[currentIndex].src}
                alt={GALLERY_IMAGES[currentIndex].alt}
                className="max-w-full max-h-[calc(100vh-120px)] object-contain lg:max-h-[90vh]"
              />

              <button
                className="absolute top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 bg-white/10 flex items-center justify-center text-white text-[22px] lg:text-2xl cursor-pointer transition-colors z-10 active:bg-white/20 lg:hover:bg-white/20 border-none right-2 lg:right-6"
                onClick={goNext}
              >
                <FiChevronRight />
              </button>

              <p className="absolute bottom-[72px] lg:bottom-[100px] left-1/2 -translate-x-1/2 text-white/50 text-label font-label tracking-widest uppercase z-10">
                {currentIndex + 1} / {GALLERY_IMAGES.length}
              </p>

              <button className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 px-7 lg:px-10 py-3.5 lg:py-4 bg-brand-green text-white text-[10px] lg:text-label font-label tracking-widest uppercase cursor-pointer transition-colors z-10 whitespace-nowrap min-h-[44px] border-none active:bg-brand-green-dark lg:hover:bg-brand-green-dark">
                Shop This Look
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lookbook;
