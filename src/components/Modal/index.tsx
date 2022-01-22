import React from 'react';
import { Backdrop, Container, CloseButton, TitleContainer } from './styles';
import CloseIcon from 'assets/CloseIcon';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  onClose(): void;
}

export function Modal({ children, onClose, title, ...rest }: IProps) {
  const modalContentRef = React.useRef<any>(null);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = event => {
    if (
      modalContentRef &&
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  return (
    <Backdrop>
      <Container ref={modalContentRef} {...rest}>
        <TitleContainer>
          {<h2>{title ? title : ''}</h2>}
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </TitleContainer>

        {children}
      </Container>
    </Backdrop>
  );
}
