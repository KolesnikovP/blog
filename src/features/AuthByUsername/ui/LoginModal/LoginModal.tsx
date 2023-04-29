import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal className={classNames(cls.LoginModal)} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
