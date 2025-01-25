import Title from './Title';

interface ContentImage {
  src: string;
  alt: string;
}

interface ContentSection {
  author?: string;
  post?: string;
  imageUrl?: string;
}

interface ContentItem {
  id: number;
  image: ContentImage[];
  title: string;
  task: string[];
  content?: string;
  section?: ContentSection;
}

interface ContentData {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  items: ContentItem[];
}

interface ContentProps {
  contents: ContentData;
}

const MasterBento: React.FC<ContentProps> = ({ contents }) => {
  return (
    <>
      <section
        className={`transition-linear w-full columns-1 gap-2 sm:columns-2 md:gap-6 lg:columns-2 xl:columns-3`}
      >
        <Title
          title={contents.title}
          subtitle={contents.subtitle}
          description={contents.description}
          align="start"
        />
        {contents &&
          contents.items.map((content) => (
            <div
              key={content.id}
              className={`group mb-6 origin-center overflow-hidden rounded-xl bg-light shadow transition-all duration-300 ease-linear`}
            >
              <div className="group overflow-hidden">
                {content.image.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="transition-300 size-full object-cover group-hover:scale-125"
                  />
                ))}
              </div>
              <div className="space-y-6 p-8">
                <h3 className="text-2xl font-semibold">{content.title}</h3>
                {content.task && (
                  <ul className="flex flex-wrap items-center justify-start gap-2">
                    {content.task.map((task) => (
                      <li
                        key={task}
                        className="rounded-full border border-dark/30 px-4 py-1 text-sm"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
                {content.content && (
                  <blockquote>
                    {/* <span className="font-mono text-7xl leading-none">
                    &#x201C;
                  </span> */}
                    <p className="text-pretty text-base">{content.content}</p>
                  </blockquote>
                )}
                {content.section && (
                  <>
                    <hr className="border-dark/10" />
                    <div className="flex items-center gap-5">
                      <img
                        src={content.section.imageUrl}
                        alt={content.section.author}
                        className="size-16 rounded-full bg-white object-contain p-1 shadow"
                      />
                      <div>
                        <h3 className="font-body text-lg font-semibold">
                          {content.section.author}
                        </h3>
                        <p>{content.section.post}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default MasterBento;
