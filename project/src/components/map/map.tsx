import cn from 'classnames';

type MapProps = {
  className: string;
}

function Map({className}: MapProps): JSX.Element{
  return (
    <section className={cn(className, 'map')} />
  );
}

export default Map;
