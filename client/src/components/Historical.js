import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import HistoryItem from './HistoryItem';
import MissionKey from './MissionKey';

const HISTORICAL_QUERY = gql`
query HistoricalQuery {
    historical{
    id 
    title 
    details
    event_date_utc
    links{
        article
    }
}
}
`;

export class Historical extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="display-4 my-3">History</h1>
                <MissionKey />
                <hr />
                <Link to="/Initial" className="btn btn-secondary">Back</Link>
                <hr />
                <Query query={HISTORICAL_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            console.log(data)

                            return <React.Fragment>
                                {
                                    data.historical.map(history => (
                                        <HistoryItem key={history.id} history={history} />
                                    ))
                                }
                            </React.Fragment>

                        }
                    }
                </Query>
            </React.Fragment>
        )
    }
}

export default Historical
