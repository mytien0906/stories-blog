import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}
