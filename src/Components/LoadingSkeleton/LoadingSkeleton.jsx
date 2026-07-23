import React from 'react';

const typeClasses = {
  image: 'w-full aspect-[3/4]',
  textSm: 'h-3 w-[60%]',
  textMd: 'h-4 w-[80%]',
  textLg: 'h-[18px] w-[40%]',
};

const Skeleton = ({ type = 'text', width, height }) => {
  const baseClass = 'bg-surface-tertiary animate-pulse';

  if (type === 'product') {
    return (
      <div className="flex flex-col gap-3">
        <div className={`${baseClass} ${typeClasses.image}`} />
        <div className={`${baseClass} ${typeClasses.textSm}`} />
        <div className={`${baseClass} ${typeClasses.textMd}`} />
        <div className={`${baseClass} ${typeClasses.textLg}`} />
      </div>
    );
  }

  return (
    <div
      className={`${baseClass} ${typeClasses[type] || ''}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
