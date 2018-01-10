import React from 'react'
import PropTypes from 'prop-types'
import classes from './Dashboard.scss'

export const Dashboard = ({ dashboard }) => (
  <div className={classes.container}>
    <span>Dashboard Component</span>
    <pre>{JSON.stringify(dashboard, null, 2)}</pre>
  </div>
)

Dashboard.propTypes = {
  dashboard: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Dashboard
