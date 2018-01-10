import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress'
import classes from './LoadingSpinner.scss'
import ContentLoader from 'react-content-loader'

//       <CircularProgress mode="indeterminate" size={size || 40} />

export const LoadingSpinner = ({ size }) => (
  <div className={classes.container}>
    <div className={classes.progress}>
      <ContentLoader type="facebook" />
    </div>
  </div>
)

LoadingSpinner.propTypes = {
  size: PropTypes.number
}

export default LoadingSpinner
