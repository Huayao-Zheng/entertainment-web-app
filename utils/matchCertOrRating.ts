import { certification, Movie } from '../typings';

type Props = {
  media: Movie;
  certifications: certification[];
};

function matchCertOrRating({ media, certifications }: Props) {
  let movieCertOrTVRating: string | undefined = '';

  for (let i = 0; i < certifications.length; i++) {
    const cert = certifications[i];

    if (media.id === cert.id) {
      if (media.media_type === 'movie') {
        for (let j = 0; j < cert.results.length; j++) {
          const result = cert.results[j];

          if (result.iso_3166_1 === 'US') {
            for (let k = 0; k < result.release_dates.length; k++) {
              const rd = result.release_dates[k];

              movieCertOrTVRating = rd.certification;
              break;
            }
          }
        }
      }

      if (media.media_type === 'tv') {
        for (let j = 0; j < cert.results.length; j++) {
          const result = cert.results[j];

          if (result.iso_3166_1 === 'US') {
            movieCertOrTVRating = result.rating;
            break;
          }
        }
      }
    }
  }

  return movieCertOrTVRating;
}

export default matchCertOrRating;
