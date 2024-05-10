const ForecastListItem = (props) => {
    const {Day} = props
        return (
            <div className="weather">
            <h2>{Day.day}</h2>
            <img src={Day.img} alt={Day.imgAlt} />
            <p><span>conditions: </span>{Day.conditions}</p>
            <p><span>time: </span>{Day.time}</p>
          </div>
          
        );
      };
      
      export default ForecastListItem;
      