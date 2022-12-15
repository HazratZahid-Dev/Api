import React, { useEffect, useState } from "react";

const GitHub = () => {
  const [state, setstate] = useState([]);
  const url = "https://api.github.com/users";

  const githubUser = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setstate(res);
  };
  useEffect(() => {
    githubUser();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      {state.map((it) => {
        return (
          <div>
            <p>{it.login}</p>
            <div>
              <img
                src={it.avatar_url}
                style={{ width: "200px", height: "200px" ,margin:'20px'}}
                alt="error"
              />
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default GitHub;
