import { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/StarIcon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className, selectedStars = 0, size = 30, onSelect,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars || 0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.selected]: isSelected,
            },
            [],
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
