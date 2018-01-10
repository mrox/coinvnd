import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for dashboard, results go into redux
  firestoreConnect([{ collection: 'dashboard' }]),
  // map redux state to props
  connect(({ firebase: { data } }) => ({
    dashboard: data.dashboard
  }))
)
