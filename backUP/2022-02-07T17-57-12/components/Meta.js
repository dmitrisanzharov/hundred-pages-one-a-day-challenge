import React from 'react';
import Head from 'next/head'

const Meta = ({obj}) => {

    const {titleStr, descriptionStr, keywordsStr, faviconUrl} = obj; 

  return (
      <>
      {/* note TITLE appears on the TAB */}
      {/* keywords should go into description, keywords */}
      <Head>
          <title>{titleStr}</title> 
          <meta name='description' content={descriptionStr} />
          <meta name='keywords' content={keywordsStr} />
        <link rel="icon" href={faviconUrl} />
      </Head>
      </>
  )
};

export default Meta;
