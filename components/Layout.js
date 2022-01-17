import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Layout({ children, meta: pageMeta }) {
  const [theme, setTheme] = useState('okaidia');
  const meta = {
    title: 'Prism with Next.js',
    description: 'Curriculum for Creative Coding with P5.js, by Eli Pleaner',

    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
          rel="stylesheet"
        />
      </Head>
      <nav>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex items-center justify-between p-8 mx-2">
          <Link href="/">
            <a className="invisible font-semibold no-underline sm:visible">
              <h1>{meta.title}</h1>
            </a>
          </Link>
          <ul className="flex items-center justify-between space-x-4"></ul>
        </div>
      </nav>
      <div id="skip">
        <article
          className="px-8 m-auto my-4 prose lg:prose-xl sm:my-16"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </>
  );
}
