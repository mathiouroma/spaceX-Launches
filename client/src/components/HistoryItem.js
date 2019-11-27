import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({ history: { title, event_date_utc, id } }) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Title: <span className={classNames({
                        // 'text-success': launch_success,
                        // 'text-danger': !launch_success
                    })}>{title}</span></h4>
                    <p>Date: <Moment format="DD-MM-YYYY HH:mm">{event_date_utc}</Moment></p>
                </div>
                <div className="col-md-3">
                    <Link to={`/history/${id}`} className='btn btn-secondary'>Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
