import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  name : PropTypes.string,
  subTitle : PropTypes.number,
  title : PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name : "Oscar Ardila",
  subTitle : "No hay subtitulo",
  title : "No hay titulo",
}
