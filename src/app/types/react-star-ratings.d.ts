declare module 'react-star-ratings' {
  export interface StarRatingsProps {
    rating: number;
    starRatedColor?: string;
    numberOfStars?: number;
    name?: string;
    starDimension?: string;
    starSpacing?: string;
    starHoverColor?: string;
    changeRating?: (newRating: number, name: string) => void;
    isSelectable?: boolean;
    isAggregateRating?: boolean;
  }

  const StarRatings: React.FC<StarRatingsProps>;
  export default StarRatings;
}
