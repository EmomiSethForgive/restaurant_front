export function Forms() {
  return (
    <div className="bg-black w-[100%] h-[100vh] m-auto">
      <div className="flex flex-col gap-7 items-center">
        <h1
          className=" font-bold text-3xl mt-4 text-white"
          style={{
            textShadow: "1px 1px 0 rgb(235, 27, 27,1)", // Ombre
            // WebkitTextStroke: '1px rgb(235, 27, 27),1', // Contour du texte (bordure)
          }}
        >
          Réservation de table(s)
        </h1>
        <form className="flex flex-col gap-5">
          <div className=" flex gap-5 md:gap-10">
            <input
              type="text"
              placeholder="JJ"
              className="border rounded-[5px] w-[27%] text-white  border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="MM"
              className="border rounded-[5px] w-[27%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="AA"
              className="border rounded-[5px] w-[27%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nom"
              className="border rounded-[5px] w-[50%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="Prenom"
              className="border rounded-[5px] w-[50%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="Nombre de personne"
              className="border text-white w-[50%] rounded-[5px] border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="Heure"
              className="border rounded-[5px] w-[50%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="text"
              placeholder="Numéro"
              className="border rounded-[5px] w-[50%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
            <input
              type="mail"
              placeholder="E-mail"
              className="border rounded-[5px] w-[92%] text-white border-[rgb(275,233,146,1)] bg-transparent"
            ></input>
          </div>
          <div>
            <button className="font-bold text-2xl leading-9 w-[92%] m-auto rounded-xl bg-red-600 text-white">
              Réservez
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
