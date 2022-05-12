import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import {
  BsBookmarkCheckFill,
  BsFillVolumeMuteFill,
  BsVolumeUpFill,
} from 'react-icons/bs';
import ReactPlayer from 'react-player/lazy';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

type Element = {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser';
};

export const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!currentMovie) return;

    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${currentMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );

        setTrailer(data.videos?.results[index]?.key);
      }
    };

    fetchMovie();
  }, [currentMovie]);

  const handleClose = () => setShowModal(false);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={
              trailer
                ? `https://www.youtube.com/watch?v=${trailer}`
                : 'https://www.youtube.com/watch?v=oic34YA4MeI'
            }
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10 text-[white]">
            <div className="flex gap-x-2">
              <button className="modalButton" onClick={() => setMuted(!muted)}>
                {muted ? (
                  <BsFillVolumeMuteFill className="h-6 w-6" />
                ) : (
                  <BsVolumeUpFill className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};
