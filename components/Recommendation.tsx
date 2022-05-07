import { certification, Movie } from '../typings';
import { MediaInfo } from './MediaInfo';
import { Thumbnail } from './Thumbnail';
import { Title } from './Title';

export type Props = {
  recommendations: Movie[];
  certifications: certification[];
};

export const Recommendation = ({ recommendations, certifications }: Props) => {
  return (
    <section className="mt-6 mb-16">
      <Title text="Recommended for you" />

      <div className="grid-container">
        {recommendations.map((media) => (
          <MediaInfo
            key={media.id}
            media={media}
            certifications={certifications}
          />
        ))}
      </div>
    </section>
  );
};
