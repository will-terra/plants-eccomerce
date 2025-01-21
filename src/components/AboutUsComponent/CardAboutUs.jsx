export default function CardAboutUs({dev}){
  return (
    <>
      <section
        className="md:py-10 border border-lunar w-[35rem] lg-[35rem] flex flex-col items-center bg-gelo rounded-2xl m-5 font-raleway shadow-strongShadow"
        key={dev.id}
      >
        <img
          className="w-60 h-70 rounded-borderFull mt-10 shadow-strongShadow"
          src={`src/${dev.imgUrl}`}
          alt=" "
        />
        <div className="m-6 py-2 text-lunar h-28 bg-w">
          <p className="mt-1 text-lunar text-[34px] font-bold font-garamond">
            {dev.name}
          </p>
          <p>{dev.idade}, {dev.cidade}</p>
          <p>{dev.aboutMe}</p>
        </div>
        <div className="mt-12 w-full ">
        <a
          target="_blank"
          href={dev.social}
          className="text-gelo font-bold w-44 h-12 sm:mt-0 mt-28 rounded bg-lunar flex
          justify-center items-center self-start ml-6  hover:ml-9 duration-300 shadow-strongShadow"
        >
          Contact
        </a>
        </div>
      </section>
    </>
  );
}

// {dev.social} -> adicionar no backend = check
// adicionar botão = check
// cor de fundo branco gelo -> bg-gelo = check
// separar em dois cards por "linha" = check