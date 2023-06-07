import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
    <div data-testid="test-title">{title}</div>
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
