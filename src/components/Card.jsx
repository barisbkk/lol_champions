import { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

const Card = () => {
  const [text, setText] = useState("");
  const [dataLol, setDataLol] = useState();

  const fetchChampions = async () => {
    let response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/13.23.1/data/tr_TR/champion.json"
    );
    const lolData = Object.values(response.data.data);
    setDataLol(lolData);
    console.log(lolData);
  };
  useEffect(() => {
    fetchChampions();
  }, []);
  return (
    <div className="d-flex justify-content-center flex-column gap-2 align-items-center pt-5">
      <div className="input-group align-items-center m-5">
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="button-addon2"
          placeholder="Enter Champion Name"
        />
      </div>
      <h2 className=" bg-secondary-subtle rounded p-2">
        {text && `"${text}" sonuçları gösteriliyor`}
      </h2>
      {!dataLol?.filter((sampiyon) =>
        sampiyon?.name?.toLowerCase().startsWith(text.toLowerCase())
      ).length && (
        <span className="fs-5 fw-bold bg-secondary-subtle rounded p-2">
          Sonuç yok
        </span>
      )}

      {dataLol
        ?.filter((sampiyon) =>
          sampiyon.name.toLowerCase().startsWith(text.toLowerCase())
        )
        ?.map((champ) => (
          <div
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 1)), url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg")`,
              backgroundSize: "cover",
            }}
            className="cardStyle rounded d-flex flex-row gap-4"
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champ.image.full}`}
              alt=""
              style={{ width: "250", height: "250" }}
            />
            <div className=" d-flex flex-column gap-2">
              <h2>{champ?.name}</h2>
              <div className="d-flex flex-row gap-2">
                {champ.tags.map((tag) => (
                  <span className="badgec">{tag}</span>
                ))}
              </div>
              <p>{champ?.blurb}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
