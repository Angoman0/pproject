function EventCard({ event }) {
    return(

        <div className="event-card">
            <div className="event-image-box">
                <img 
                URL={'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'}
                alt="name"
                className="event-image"
                />
            </div>


            <div className="event-content">

            <h3>NAME</h3>
            <p className="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus sit doloribus totam distinctio deleniti perferendis aliquid aut voluptas voluptate eum nihil magnam omnis, dolore illum expedita ad libero adipisci!
            </p>


            <p><strong>Venue:</strong>Nairo</p>
            <p className="event-meta"><strong>Location:</strong>loa</p>
            <p className="event-meta"><strong>Time:</strong>77</p>
            <div className="event-actions">

                <button className="details-btn">
                    View Details
                </button>

                <button className="save-btn">Save Event</button>



            </div>
            </div>
            </div>






    );
        }

export default EventCard;