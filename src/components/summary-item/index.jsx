import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  image: 'mb-2 w-35 h-20 object-cover rounded',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  // 이미지 경로 설정 (static/images/이름.png)
  const imagePath = `/images/${name}.png`;

  return (
    <div className={classes.wrapper}>
      <img
        src={imagePath}
        alt={name}
        className={classes.image}
        onError={(e) => (e.target.style.display = 'none')}
      />
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== description.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}</p>
    </div>
  );
};

export default SummaryItem;
