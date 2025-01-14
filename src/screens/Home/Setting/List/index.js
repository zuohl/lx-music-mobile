import React, { memo } from 'react'

import Section from '../components/Section'
import AddMusicLocationType from './AddMusicLocationType'
import { useTranslation } from '@/plugins/i18n'

export default memo(() => {
  const { t } = useTranslation()

  return (
    <Section title={t('setting_list')}>
      <AddMusicLocationType />
    </Section>
  )
})
