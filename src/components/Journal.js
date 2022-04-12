export default function Journal(props){
    return (
        <div>
            <div className="wrapper">
                <div className="feature-img">
                    <img src={props.item.imageUrl} />
                </div>
                <div className="content-wrapper">
                    <div className="location">{props.item.location}</div>
                    <a href={props.item.googleMapsUrl} className="map-link" target={'_blank'}>View on Google View</a>
                    <h2 className="main-header">{props.item.title}</h2>
                    <div className="journal-date">{`${props.item.startDate} - ${props.item.endDate}`}</div>
                    <div className="journal-body">
                        {props.item.description}
                    </div>
                </div>
            </div>
        </div>
    )
}