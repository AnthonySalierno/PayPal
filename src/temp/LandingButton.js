function LandingButton(props) {
  return (
    <div className="landing-button">
      <span>{props.buttonName}</span>
      <img id={props.imgId} className={"button-image"} src={props.imgSrc} alt={props.imgAlt} />
    </div>
  )
}

export default LandingButton;
