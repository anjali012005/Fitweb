import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Stack
} from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import TimerIcon from '@mui/icons-material/Timer'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import React, { useContext, useState } from 'react'
import { addActivity } from '../services/api'
import ActivityList from './ActivityList'
import { AuthContext } from 'react-oauth2-code-pkce'

const ActivityForm = ({ onActivityAdded }) => {
    const { logOut } = useContext(AuthContext);

    const [activity, setActivity] = useState({
        type: "RUNNING",
        duration: '',
        caloriesBurned: '',
        additionalMetrics: {}
    })

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         await addActivity(activity)
    //         onActivityAdded()
    //         setActivity({ type: "RUNNING", duration: '', caloriesBurned: '' })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const handleSubmit = async (e) => {
        console.log("ActivityForm rendered ✅");
        e.preventDefault();

        // 👇 FORM DATA CHECK
        console.log("Submitting activity:", activity);

        try {
            const response = await addActivity(activity);

            // 👇 API RESPONSE CHECK
            console.log("Add activity response:", response);

            onActivityAdded();

            setActivity({
                type: "RUNNING",
                duration: '',
                caloriesBurned: ''
            });
        } catch (error) {
            console.error("Error adding activity:", error);
        }
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: '90%',
                minHeight: '100%',
                px: { xs: 1, md: 6 },
                py: 4,
                background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
                color: '#fff'
            }}
        >
            <Stack spacing={4} mx="auto">

                {/* Header */}
                <Box display="flex" alignItems="center" gap={2}>
                    <FitnessCenterIcon sx={{ fontSize: 36, color: '#90caf9' }} />
                    <Typography variant="h4" fontWeight="bold">
                        Track Your Activity
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={logOut}>
                        Logout
                    </Button>
                </Box>

                {/* Activity Type */}
                <FormControl fullWidth>
                    <InputLabel sx={{ color: '#bbb' }}>
                        Activity Type
                    </InputLabel>
                    <Select
                        value={activity.type}
                        label="Activity Type"
                        onChange={(e) =>
                            setActivity({ ...activity, type: e.target.value })
                        }
                        sx={{
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#90caf9'
                            }
                        }}
                    >
                        <MenuItem value="RUNNING">🏃 Running</MenuItem>
                        <MenuItem value="WALKING">🚶 Walking</MenuItem>
                        <MenuItem value="CYCLING">🚴 Cycling</MenuItem>
                    </Select>
                </FormControl>

                {/* Duration */}
                <TextField
                    fullWidth
                    label="Duration (Minutes)"
                    type="number"
                    value={activity.duration}
                    onChange={(e) =>
                        setActivity({ ...activity, duration: e.target.value })
                    }
                    InputLabelProps={{ style: { color: '#bbb' } }}
                    InputProps={{
                        startAdornment: (
                            <TimerIcon sx={{ mr: 1, color: '#90caf9' }} />
                        )
                    }}
                    sx={{
                        input: { color: '#fff' },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555'
                        }
                    }}
                />

                {/* Calories */}
                <TextField
                    fullWidth
                    label="Calories Burned"
                    type="number"
                    value={activity.caloriesBurned}
                    onChange={(e) =>
                        setActivity({ ...activity, caloriesBurned: e.target.value })
                    }
                    InputLabelProps={{ style: { color: '#bbb' } }}
                    InputProps={{
                        startAdornment: (
                            <LocalFireDepartmentIcon sx={{ mr: 1, color: '#ff9800' }} />
                        )
                    }}
                    sx={{
                        input: { color: '#fff' },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#555'
                        }
                    }}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    size="large"
                    startIcon={<DirectionsRunIcon />}
                    sx={{
                        alignSelf: 'flex-start',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderRadius: 3,
                        textTransform: 'none',
                        background: 'linear-gradient(90deg, #2196f3, #21cbf3)',
                        color: '#000',
                        '&:hover': {
                            background: 'linear-gradient(90deg, #1e88e5, #1de9b6)'
                        }
                    }}
                >
                    Add Activity
                </Button>

            </Stack>

            <Box >
                <ActivityList />
            </Box>

        </Box>
    )
}

export default ActivityForm
