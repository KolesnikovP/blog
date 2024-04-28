import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import TileIcon from '@/shared/assets/icons/TileIcon.svg';
import ListIcon from '@/shared/assets/icons/ListIcon.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

type ViewType = {
  view: ArticleView,
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const viewTypes: ViewType[] = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

// ToDo: на самом деле ему тут не место, это больше фича или виджет. К самой сущности отношение он особо не имее
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  // Hack: onClick - всегда принимает параметром евент который специфичен для листенера onClick
  // Но нам необходимо передавать новый вид отображения. Поэтому мы можем сделать функцию которая возвращает
  // функцию (некое замыкание) и уже на верхнем уровне этого замыкания мы принимаем нужные нам параметры.
  // В кнопке мы ее не просто передаем, а ВЫЗЫВАЕМ и эта функция нам вернет нам новую функцию
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          onClick={onClick(viewType.view)}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
