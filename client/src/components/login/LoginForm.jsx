import React, { useState } from 'react'
import { Stack } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import Apiservices from '../../services/ApiServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import JwtService from '../../services/TokenServices'
import { useTranslation } from 'react-i18next'
function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const i = {
    email: '',
    password: '',
  }
  const [login, setLogin] = useState(i)
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const handelLogin = (e) => {
    e.preventDefault()
    Apiservices.post('/signin', login).then((res) => {
      if (res.data.msg) {
        dispatch(actions.login({name:'admin' }))
        setLogin(i)
      }else{
        alert('false')
      }
    })
  }
  return (
    <form onSubmit={handelLogin} style={{ width: '100%' }} action="">
      <Stack className="login-form" gap={'20px'}>
        <TextField
          sx={{
            borderRadius: '8px',
            border: '1px solid var(--icons-side-menu)',
          }}
          color="info"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          id="outlined-basic"
          label={t("email")}
          variant="outlined"
        />
        <FormControl variant="outlined">
          <InputLabel color="info" htmlFor="outlined-adornment-password">
          {t("password")}
          </InputLabel>
          <OutlinedInput
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff color="info" />
                  ) : (
                    <Visibility color="info" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          type="submit"
          sx={{ padding: '12px', borderRadius: '8px' }}
          variant="contained"
        >
          {t("signinNow")}
        </Button>
      </Stack>
    </form>
  )
}

export default LoginForm
