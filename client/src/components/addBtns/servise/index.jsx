import React from 'react'
import { Typography } from '@mui/material'
import { Stack, Container } from '@mui/system'
import Btn from './Btn'
import { useTranslation } from 'react-i18next'
function SerivesHeader() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="md">
      <Stack direction={'row'}  justifyContent="space-between">
        <Typography color="primary" variant="h4" gutterBottom>
        {t("services")}  
        </Typography>
        <Btn />
      </Stack>
    </Container>
  )
}

export default SerivesHeader
