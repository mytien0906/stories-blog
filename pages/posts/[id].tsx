import { useRouter } from 'next/router';
import React from 'react';
import DetailPostContainer from '../../src/containers/DetailPostContainer';

export default function idPost() {
  const router = useRouter();
  const { id } = router.query;
  return <DetailPostContainer id={id} />;
}
