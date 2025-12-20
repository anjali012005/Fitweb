import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getActivities } from '../services/api'

const ActivityList = () => {
  const [activities, setActivities] = useState([])
  const navigate = useNavigate()

  const fetchActivities = async () => {
    try {
      const response = await getActivities()
      setActivities(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  return (
    <Box
      sx={{
        width: '80%',
        mt: 6,
        px: { xs: 2, md: 6 },
        py: 5,
        background: 'linear-gradient(135deg, #0b1f2a, #102c3a)',
        color: '#fff'
      }}
    >
      <Stack spacing={4} maxWidth={1100} mx="auto">

        {/* Section Title */}
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: '#90caf9' }}
          >
            Your Activities
          </Typography>
          <Typography sx={{ color: '#9aa7b2', fontSize: '0.9rem' }}>
            Track and review your fitness progress
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* Activities */}
        <Grid container spacing={3}>
          {activities.map((activity) => (
            <Grid item xs={12} sm={6} md={4} key={activity.id}>
              <Card
                onClick={() => navigate(`/activities/${activity.id}`)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  backgroundColor: '#0f172a',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#38bdf8',
                    boxShadow: '0 12px 30px rgba(56,189,248,0.15)'
                  }
                }}
              >
                <CardContent>
                  <Stack spacing={1.4}>
                    <Typography
                  
                      variant="h6"
                      fontWeight="bold"
                      sx={{ letterSpacing: 0.5 , color: '#cbd5e1' }}
                    >
                      {activity.type}
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1' }}>
                      Duration: <b>{activity.duration}</b> min
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1' }}>
                      Calories Burned: <b>{activity.caloriesBurned}</b> kcal
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {activities.length === 0 && (
          <Typography sx={{ color: '#94a3b8', textAlign: 'center', mt: 4 }}>
            No activities added yet. Start tracking today 🚀
          </Typography>
        )}

      </Stack>
    </Box>
  )
}

export default ActivityList
