import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button';
import {ThemeButton} from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = (props: LangSwitcherProps) => {
    const {className} = props

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher)}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;