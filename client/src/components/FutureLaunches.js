import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
// import LaunchItem from './LaunchItem';
import FutureLaunchItem from './FutureLaunchItem';
import FutureMissionKey from './FutureMisionKey';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    futurelaunches{
        flight_number
        mission_name
        launch_date_local
        launch_success
        details
        
    }
}
`;

export class Launches extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="display-4 my-3">Future Launches</h1>
                <FutureMissionKey />
                <hr />
                <Link to="/Initial" className="btn btn-secondary">Back</Link>
                <hr />
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            // console.log(data)
                            return <React.Fragment>
                                {
                                    data.futurelaunches.map(launch => (
                                        <FutureLaunchItem key={launch.flight_number} launch={launch} />
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

export default Launches
