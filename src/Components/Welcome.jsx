import { useState } from "react";
const Welcome = () => {
  const [account, setAccount] = useState("login");
  const togglesign = () => {
    account === "login" ? setAccount("logout") : setAccount("login");
  };
  const [project, setProject] = useState("ShowMyProject");
  const toggleProject = () => {
    project === "ShowMyProject"
      ? setProject("HideMyProject")
      : setProject("ShowMyProject");
  };
  const ProjectList = [
    "Back-End-Leactures",
    "CypherVault",
    "TaskForge",
    "HackQuanta",
  ];
  return (
    <>
      {account === "login" ? (
        <>
          <h1 style={{ display: "flex", justifyContent: "center" }}>Welcome</h1>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Please Sign In{" "}
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => togglesign()}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10vw",
                height: "5vh",
              }}
            >
              Login
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ display: "flex", justifyContent: "center" }}>Welcome</h1>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              border: "6px",
              borderRadius: "2px",
            }}
          >
            Make Project Buddy
          </h2>
          <div style={{ display: "flex", marginLeft: "6vw", marginTop: "8vh" }}>
            <button
              style={{ border: "6px", borderRadius: "2px" }}
              onClick={() => togglesign()}
            >
              Logout
            </button>
          </div>
          {project === "ShowMyProject" ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "46vw",
                }}
              >
                <button onClick={() => toggleProject()}>ShowMyProject</button>
              </div>
            </>
          ) : (
            <>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginLeft: "56vw",
                  border: "6px",
                  borderRadius: "2px",
                  width: "10vw",
                }}
              >
                {ProjectList.map((name) => (
                  <li
                    style={{
                      border: "1px solid",
                      borderRadius: "6px",
                      marginBottom: "6px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginBottom: "6px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{ borderRadius: "6px" }}
                  onClick={() => toggleProject()}
                >
                  HideMyProject
                </button>
              </div>{" "}
            </>
          )}
        </>
      )}
    </>
  );
}
export default Welcome;