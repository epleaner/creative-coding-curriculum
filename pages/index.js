import Layout from '~/components/Layout';
import { getDocBySlug } from '~/lib/docs';
import markdownToHtml from '~/lib/markdown';

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps() {
  const doc = getDocBySlug('index');
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}
