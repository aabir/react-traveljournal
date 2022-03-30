export default function Journal(props){
    return (
        <div>
            <div className="feature-img">

            </div>
            <div className="title-header">
                <div className="location"></div>
                <a href="javascript:void(0);" className="location-">View on Google View</a>
                <h2 className="main-header">{props.title}</h2>

                <div className="journal-date"></div>

                <div className="journal-body">

                </div>
            </div>
        </div>
    )
}