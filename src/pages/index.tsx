import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getPagesList } from "../logic/contentPages";

type Props = {};

const Home: NextPage<Props> = ({}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Tumau</title>
      </Head>
      <div>
        <p>TODO</p>
      </div>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {};

  const pages = getPagesList();

  return {
    props,
  };
};

export default Home;
