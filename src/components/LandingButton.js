function LandingButton(props) {
  return (
    <figure id={props.imgId}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <figcaption>{props.buttonName}</figcaption>
    </figure>
  )
}

export default LandingButton;
