import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ title, description, imgSrc, href, tags, showLink = true }) =>
  showLink ? (
    <Link
      href={href}
      aria-label={`Link to ${title}`}
      className="md max-w-[34rem] p-4 md:w-1/2"
      showIcon={false}
    >
      <div className="h-full overflow-hidden rounded-md border-2 border-neutral-200 hover:border-primary-600 dark:border-neutral-800 dark:hover:border-primary-400">
        <Image
          alt={title}
          src={imgSrc}
          className="border-b border-solid object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
        <div className="p-6">
          <h4 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="ml-0.5 inline-block h-4 w-4 fill-current"
            >
              <g data-name="Layer 2">
                <g data-name="external-link">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                  <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                </g>
              </g>
            </svg>
          </h4>
          <p className="prose mb-3 max-w-none text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
          {tags && (
            <div className="mt-4 text-xs text-neutral-700 dark:text-neutral-300">
              {tags.join(' | ')}
            </div>
          )}
        </div>
      </div>
    </Link>
  ) : (
    <div className="md max-w-[34rem] p-4 md:w-1/2">
      <div className="h-full overflow-hidden rounded-md border-2 border-neutral-200 dark:border-neutral-800 ">
        <Image
          alt={title}
          src={imgSrc}
          className="border-b border-solid object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
        <div className="p-6">
          <h4 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {title}
          </h4>
          <p className="prose mb-3 max-w-none text-neutral-500 dark:text-neutral-400">
            (Coming soon) {description}
          </p>
          {tags && (
            <div className="mt-4 text-xs text-neutral-700 dark:text-neutral-300">
              {tags.join(' | ')}
            </div>
          )}
        </div>
      </div>
    </div>
  )

export default Card
