import { Container, List } from './styles';

interface IProps {
  totalPages: number;
  currentPage: number;
  onChange(page: number): void;
}

export function Pagination({ totalPages, currentPage, onChange }: IProps) {
  const render = () => {
    if (totalPages < 6) {
      return Array.from(Array(totalPages).keys()).map(k => (
        <Li key={k} active={currentPage === k + 1}>
          <button onClick={() => onChange(k + 1)}>{k + 1}</button>
        </Li>
      ));
    }

    let previous;
    let next;
    if (currentPage > 3) {
      previous = (
        <>
          <Li>
            <button onClick={() => onChange(1)}>1</button>
          </Li>
          <Li>
            <button onClick={() => onChange(currentPage - 2)}>...</button>
          </Li>
          <Li>
            <button onClick={() => onChange(currentPage - 1)}>
              {currentPage - 1}
            </button>
          </Li>
          <Li active={true}>
            <button onClick={() => onChange(currentPage)}>{currentPage}</button>
          </Li>
        </>
      );
    } else {
      previous = Array.from(Array(currentPage).keys()).map(k => (
        <Li key={k} active={currentPage === k + 1}>
          <button onClick={() => onChange(k + 1)}>{k + 1}</button>
        </Li>
      ));
    }

    if (currentPage < totalPages - 2) {
      next = (
        <>
          <Li>
            <button onClick={() => onChange(currentPage + 1)}>
              {currentPage + 1}
            </button>
          </Li>
          <Li>
            <button onClick={() => onChange(currentPage + 2)}>...</button>
          </Li>
          <Li>
            <button onClick={() => onChange(totalPages)}>{totalPages}</button>
          </Li>
        </>
      );
    } else {
      next = Array.from(Array(totalPages - currentPage).keys()).map(k => (
        <Li key={k}>
          <button onClick={() => onChange(k + currentPage + 1)}>
            {k + currentPage + 1}
          </button>
        </Li>
      ));
    }

    return (
      <>
        {previous}
        {next}
      </>
    );
  };

  return (
    <>
      <Container>
        <Li>
          <button
            onClick={() => onChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 24 24" height={20}>
              <path
                fill="none"
                stroke="#9b9b9b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </Li>

        {render()}

        <Li>
          <button
            onClick={() => onChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg viewBox="0 0 24 24" height={20}>
              <path
                fill="none"
                stroke="#9b9b9b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </Li>
      </Container>
    </>
  );
}

const Li = ({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) => {
  return <List active={active}>{children}</List>;
};
