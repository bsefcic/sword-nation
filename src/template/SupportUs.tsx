import useDownloader from 'react-use-downloader';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const SupportUs = () => {
  const { download } = useDownloader();
  const fileUrl = `/assets/images/avatar.png`;
  const filename = `avatar.png`;
  return (
    <Background color="bg-primary-500">
      <Section
        id="support"
        title="Susține-ne proiectele"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem."
      >
        <div className="text-center">
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            assumenda voluptatem.
          </p>
          <button
            className="bg-white text-gray-900 mt-6 py-3 px-3 rounded-xl hover:bg-gray-300"
            onClick={() => download(fileUrl, filename)}
          >
            download document word
          </button>
        </div>
      </Section>
    </Background>
  );
};

export { SupportUs };
