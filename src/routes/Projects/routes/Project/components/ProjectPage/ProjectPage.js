import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import classes from './ProjectPage.scss'
import Button from 'material-ui/Button/Button';

const Project = ({ params, projeca, viewProject }) => (
  <div className={classes.container}>
    <Card className={classes.card}>
      <CardContent>
      <Button onClick={() => viewProject(projeca)}>abc</Button>
        <Typography className={classes.title} component="h2">
          {
            JSON.stringify(projeca)
            // project.name || 'Project'
          }
        </Typography>
        <Typography className={classes.subtitle}>
          {params.projectname}
        </Typography>
        <Typography component="p">
          <pre>{JSON.stringify(projeca, null, 2)}</pre>
        </Typography>
      </CardContent>
    </Card>
  </div>
)

Project.propTypes = {
  projeca: PropTypes.object,
  params: PropTypes.object.isRequired
}

export default Project
