import { useMediaQuery } from 'react-responsive';

interface IMobileProps {
  considerLandscape?: boolean;
  maxWidth?: string;
  maxWidthLandscape?: string;
}

export const useIsMobile = (props: IMobileProps = {}): boolean => {
  const {
    considerLandscape = false,
    maxWidth = '48rem',
    maxWidthLandscape = '64rem',
  } = props;
  const isWidthCorrect = useMediaQuery({ maxWidth });
  const isPointerFine = useMediaQuery({ query: '(pointer: fine)' });
  const isWidthLandscapeCorrect = useMediaQuery({
    maxWidth: maxWidthLandscape,
    orientation: 'landscape',
  });

  return (
    (isWidthCorrect || (considerLandscape && isWidthLandscapeCorrect)) &&
    !isPointerFine
  );
};
