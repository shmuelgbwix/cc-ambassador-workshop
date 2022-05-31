import React, { FC } from 'react';
import { useRequest } from '@wix/yoshi-flow-bm';
import { fetch } from '../comments.api';

const Test: FC = () => {
  const { loading, error, data } = useRequest(fetch());
  return (
    <>
      {data?.map((e, i) => {
        return (
          <p key={i}>
            {e.text} - {e.author}
          </p>
        );
      })}
    </>
  );
};
export default Test;
