import metaData from '@/data/metadata'
import React from 'react'

const Meta = () => {
  return (
    <>
      {metaData.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} property={meta.property}/>
      ))}
    </>
  );
}

export default Meta