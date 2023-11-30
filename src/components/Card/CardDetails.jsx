import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  let { name, location, episode, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  // let EpApi = `https://rickandmortyapi.com/api/character/${id}/episodes`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log("dataERP", data)
      updateFetchedData(data);

      // let EpData = await fetch(EpApi).then((res) => res.json());
      // console.log("EpData",EpData)
      // setEpisodes(EpData);
    })();
  }, [api]);


  // useEffect(() => {
  //   // Fetch character details
  //   // fetch(`https://rickandmortyapi.com/api/character/${id}`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => setCharacter(data));

  //   // Fetch episodes where the character appears
  //   fetch(`https://rickandmortyapi.com/api/character/${id}/episodes`)
  //     .then((response) => response.json())
  //     .then((data) => setEpisodes(data));
  //     console.log("episode",episodes)
  // }, [id]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Episodes: </span>
            {episode && episode.length > 0 ? (
              episode.map((episodeUrl, index) => (
                <span key={index}>
                  {index !== 0 ? ', ' : ''}
                  <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
                    Episode {index + 1}
                  </a>
                </span>
              ))
            ) : (
              <span>No episodes found.</span>
            )}
          </div>
          {/* <div className="">
  <span className="fw-bold">Episodes: </span>
  {episode ?? episode[0]}

</div> */}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
