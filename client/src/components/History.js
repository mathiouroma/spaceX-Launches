import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';


const HISTORICAL_QUERY = gql`
query HistoricalQuery($id: Int!){
    historicalUnique(id:$id){
    id 
    title 
    flight_number
    details
    event_date_utc
    links{
        article
    }
}
}
`;

export class History extends Component {
    render() {
        let { id } = this.props.match.params;
        id = parseInt(id);
        return (
            <Fragment>
                <Query query={HISTORICAL_QUERY} variables={{ id }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error)
                            console.log(data.historicalUnique)
                            const { id, title, flight_number, details,
                                links: { article }
                            } = data.historicalUnique;
                            return <div>
                                <h1 className="display-4 my-3"><span className="text-dark">TITLE:{title}</span> </h1>
                                <h4 className="mb-3">Launch Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Flight Number: {flight_number}</li>
                                    <li className="list-group-item">Details: {details}</li>
                                    <li className="list-group-item" key={id}><a href={article} rel="noopener noreferrer" target='_blank'>Article</a></li>
                                </ul>
                                <hr />
                                <Link to="/history" className="btn btn-secondary">Back</Link>
                            </div>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default History
