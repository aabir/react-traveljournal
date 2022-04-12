export default function Journal(props){
    return (
        <div>
            <div className="feature-img">
                <img src={props.item.imageUrl} />
            </div>
            <div className="title-header">
                <div className="location">{props.item.location}</div>
                <a href={props.item.googleMapsUrl} className="location-">View on Google View</a>
                <h2 className="main-header">{props.item.title}</h2>

                <div className="journal-date">{`${props.item.startDate} - ${props.item.endDate}`}</div>

                <div className="journal-body">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}