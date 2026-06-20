function Logo() {
  return (
    <a href="#" className="logo__container">
      <img
        className="logo__image"
        src="/src/assets/images/mic-logo-1.png"
        alt=""
      />
      <div className="logo__content">
        <p className="logo--title-top">SOUND CELLAR</p>
        <div className="logo__span--container">
          <div className="logo__accent--line"></div>
          <p className="logo--title-bottom">RECORDING</p>
          <div className="logo__accent--line"></div>
        </div>
      </div>
    </a>
  );
}

export default Logo;
