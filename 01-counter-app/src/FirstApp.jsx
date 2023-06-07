import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  name : PropTypes.string,
  subTitle : PropTypes.string,
  title : PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name : "Oscar Ardila",
  subTitle : "No hay subtitulo",
  // title : "No hay titulo",
}
