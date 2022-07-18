export function useStat(inial) {
  let data = inial ? inial : undefined;
  function setData(d) {
    data = d;
  }

  return { data, setData };
}

import React from "react";

export default function Test() {
  const { user, setUser } = useStat();
  return <div>test</div>;
}
//testing
