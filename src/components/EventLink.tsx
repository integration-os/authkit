import axios from "axios";
import { useEffect, useState } from "react";

const getCatFacts = async () => {
	try {
		const response = await axios.get("https://catfact.ninja/fact")
        return response;
	}
	catch (error) {
		console.log(error);
	}
}

export const EventLinkComponent = ({group, integrations}: {group: string, integrations: string[]}) => {

    const onClose = () => {
        const iframe = document.getElementById(
            "event-link-iframe"
          ) as HTMLIFrameElement;
          iframe.style.display = "none";
    }

    const [fact, setFact] = useState("Cat fact loading....")

    useEffect(() => {
       ( async () => {
        const fact: any = await getCatFacts();
        setFact(fact.data.fact);
       })();
    }, [])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "375px",
          height: "720px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.20)",
          textAlign: "center"
        }}
      >
        <p>{fact}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
