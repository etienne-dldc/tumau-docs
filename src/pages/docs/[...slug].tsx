import { GetStaticPaths, GetStaticProps } from "next";
import { getPagesList } from "../../logic/contentPages";

type Props = {};

type Params = { slug: Array<string> };

function DocPage(): JSX.Element {
  return <p>TODO</p>;
}

export default DocPage;

export const getStaticPaths: GetStaticPaths<Params> = async (context) => {
  const pages = getPagesList();
  return {
    paths: pages.map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  console.log(context.params?.slug);
  return {
    props: {},
  };
};
